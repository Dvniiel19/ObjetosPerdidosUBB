import prisma from '../config/prisma.js';

const UN_DIA_MS = 24 * 60 * 60 * 1000;
const ESTADOS_OBJETO = ['en_custodia', 'no_reclamado', 'entregado', 'dado_de_baja'];

// "2026-11" a partir de una fecha
const mesDe = (fecha) => fecha.toISOString().slice(0, 7);

// Cuenta cuantas fechas caen en cada mes, ordenado del mes mas antiguo al mas nuevo
function contarPorMes(fechas) {
  const conteo = {};
  for (const fecha of fechas) {
    const mes = mesDe(fecha);
    conteo[mes] = (conteo[mes] ?? 0) + 1;
  }
  return Object.keys(conteo)
    .sort()
    .map((mes) => ({ mes, cantidad: conteo[mes] }));
}

// Promedio de dias entre pares de fechas, con un decimal. null si no hay datos.
function promedioDias(pares) {
  if (pares.length === 0) {
    return null;
  }
  const totalDias = pares.reduce((suma, [inicio, fin]) => suma + (fin - inicio) / UN_DIA_MS, 0);
  return Math.round((totalDias / pares.length) * 10) / 10;
}

/**
 * GET /api/reportes/estadisticas (solo administrador, Req 05)
 * Solo devuelve numeros agregados: ningun dato personal.
 * @param {Date} [fechaReferencia=new Date()] - "hoy", para los dias en custodia
 */
export async function obtenerEstadisticas(fechaReferencia = new Date()) {
  const [
    totalObjetos,
    conteoEstados,
    conteoCategorias,
    conteoPuntos,
    categorias,
    puntos,
    registros,
    bajas,
    entregas,
    enCustodia,
  ] = await Promise.all([
    prisma.objeto.count(),
    prisma.objeto.groupBy({ by: ['estado'], _count: { _all: true } }),
    prisma.objeto.groupBy({ by: ['id_categoria'], _count: { _all: true } }),
    prisma.objeto.groupBy({ by: ['id_punto'], _count: { _all: true } }),
    prisma.categoria.findMany({ select: { id_categoria: true, nombre: true } }),
    prisma.puntoAcopio.findMany({ select: { id_punto: true, nombre: true } }),
    prisma.objeto.findMany({ select: { registrado_en: true } }),
    prisma.actaDestruccion.findMany({
      where: { objetos: { some: { estado: 'dado_de_baja' } } },
      select: { ejecutada_en: true },
    }),
    // Objetos entregados con la fecha de entrega de su reclamo
    prisma.reclamo.findMany({
      where: { estado: 'entregado', entregado_en: { not: null }, objeto: { estado: 'entregado' } },
      select: { entregado_en: true, objeto: { select: { registrado_en: true } } },
    }),
    prisma.objeto.findMany({ where: { estado: 'en_custodia' }, select: { registrado_en: true } }),
  ]);

  // Todos los estados aparecen, aunque tengan 0
  const porEstado = Object.fromEntries(ESTADOS_OBJETO.map((estado) => [estado, 0]));
  for (const fila of conteoEstados) {
    porEstado[fila.estado] = fila._count._all;
  }

  const nombreCategoria = new Map(categorias.map((c) => [c.id_categoria, c.nombre]));
  const porCategoria = conteoCategorias
    .map((fila) => ({
      id_categoria: fila.id_categoria,
      categoria: nombreCategoria.get(fila.id_categoria),
      cantidad: fila._count._all,
    }))
    .sort((a, b) => b.cantidad - a.cantidad);

  const nombrePunto = new Map(puntos.map((p) => [p.id_punto, p.nombre]));
  const porPunto = conteoPuntos
    .map((fila) => ({
      id_punto: fila.id_punto,
      punto_acopio: nombrePunto.get(fila.id_punto),
      cantidad: fila._count._all,
    }))
    .sort((a, b) => b.cantidad - a.cantidad);

  const porcentajeEntregados = totalObjetos === 0
    ? 0
    : Math.round((porEstado.entregado / totalObjetos) * 1000) / 10;

  return {
    generado_en: fechaReferencia,
    total_objetos: totalObjetos,
    por_estado: porEstado,
    por_categoria: porCategoria,
    por_punto: porPunto,
    registrados_por_mes: contarPorMes(registros.map((r) => r.registrado_en)),
    bajas_por_mes: contarPorMes(bajas.map((b) => b.ejecutada_en)),
    porcentaje_entregados: porcentajeEntregados,
    promedio_dias_hasta_entrega: promedioDias(
      entregas.map((e) => [e.objeto.registrado_en, e.entregado_en]),
    ),
    promedio_dias_en_custodia: promedioDias(
      enCustodia.map((o) => [o.registrado_en, fechaReferencia]),
    ),
  };
}

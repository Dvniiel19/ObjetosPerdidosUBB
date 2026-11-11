import { useEffect, useState } from 'react';
import { obtenerEstadisticas } from '../services/cicloVidaService.js';
import { fechaParaMostrar } from '../utils/fechaUtils.js';

const ESTADOS = [
  ['en_custodia', 'En custodia'],
  ['entregado', 'Entregados'],
  ['no_reclamado', 'No reclamados'],
  ['dado_de_baja', 'Dados de baja'],
];

const MESES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

// "2026-10" → "Oct 2026"
function nombreMes(mes) {
  const [anio, numero] = mes.split('-');
  return `${MESES[Number(numero) - 1]} ${anio}`;
}

// Gráfico de barras horizontales: una fila por elemento, con su valor a la derecha
function Barras({ filas }) {
  const maximo = Math.max(1, ...filas.map((fila) => fila.cantidad));
  if (filas.length === 0) return <p className="ayuda">Sin datos todavía.</p>;

  return filas.map((fila) => (
    <div className="barra" key={fila.nombre}>
      <span>{fila.nombre}</span>
      <div className="barra-pista">
        <div className="barra-valor" style={{ width: `${(fila.cantidad / maximo) * 100}%` }} />
      </div>
      <b>{fila.cantidad}</b>
    </div>
  ));
}

// RF1: reportes estadísticos agregados. Solo para el Administrador y sin datos personales.
export default function ReportesPage() {
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    obtenerEstadisticas()
      .then(setDatos)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <main className="ciclo-vida">
        <h1>Reportes estadísticos</h1>
        <p role="alert">{error}</p>
      </main>
    );
  }

  if (!datos) {
    return (
      <main className="ciclo-vida">
        <h1>Reportes estadísticos</h1>
        <p role="status">Cargando estadísticas…</p>
      </main>
    );
  }

  // Se juntan los registros y las bajas de cada mes (últimos 12 meses con movimiento)
  const porMes = new Map();
  for (const fila of datos.registrados_por_mes) {
    porMes.set(fila.mes, { mes: fila.mes, registrados: fila.cantidad, bajas: 0 });
  }
  for (const fila of datos.bajas_por_mes) {
    const actual = porMes.get(fila.mes) ?? { mes: fila.mes, registrados: 0, bajas: 0 };
    porMes.set(fila.mes, { ...actual, bajas: fila.cantidad });
  }
  const meses = [...porMes.values()].sort((a, b) => a.mes.localeCompare(b.mes)).slice(-12);
  const maximoMes = Math.max(1, ...meses.map((m) => Math.max(m.registrados, m.bajas)));

  const dias = (valor) => (valor === null ? 'Sin datos' : `${valor} días`);

  return (
    <main className="ciclo-vida">
      <div className="cabecera-pagina">
        <div>
          <h1>Reportes estadísticos</h1>
          <p>Totales agregados del ciclo de vida de los objetos. No incluyen datos personales.</p>
        </div>
        <small>Actualizado el {fechaParaMostrar(datos.generado_en)}</small>
      </div>

      <div className="indicadores">
        <div className="tarjeta indicador">
          <span>Objetos registrados</span>
          <strong>{datos.total_objetos}</strong>
          <span>Desde el inicio del sistema</span>
        </div>
        <div className="tarjeta indicador">
          <span>Entregados a su dueño</span>
          <strong>{datos.porcentaje_entregados}%</strong>
          <span>{datos.por_estado.entregado} de {datos.total_objetos} objetos</span>
        </div>
        <div className="tarjeta indicador">
          <span>Dados de baja</span>
          <strong>{datos.por_estado.dado_de_baja}</strong>
          <span>Con acta de respaldo</span>
        </div>
        <div className="tarjeta indicador">
          <span>Promedio hasta la entrega</span>
          <strong>{dias(datos.promedio_dias_hasta_entrega)}</strong>
          <span>En custodia hoy: {dias(datos.promedio_dias_en_custodia)} en promedio</span>
        </div>
      </div>

      <div className="graficos">
        <section className="tarjeta">
          <h2>Objetos por estado</h2>
          <Barras filas={ESTADOS.map(([clave, nombre]) => ({ nombre, cantidad: datos.por_estado[clave] ?? 0 }))} />
        </section>
        <section className="tarjeta">
          <h2>Objetos por categoría</h2>
          <Barras filas={datos.por_categoria.map((fila) => ({ nombre: fila.categoria, cantidad: fila.cantidad }))} />
        </section>
        <section className="tarjeta">
          <h2>Objetos por punto de acopio</h2>
          <Barras filas={datos.por_punto.map((fila) => ({ nombre: fila.punto_acopio, cantidad: fila.cantidad }))} />
        </section>
      </div>

      <section className="tarjeta">
        <div className="cabecera-pagina">
          <h2>Registros y bajas por mes</h2>
          <div className="leyenda">
            <span><i />Registrados</span>
            <span><i className="baja" />Dados de baja</span>
          </div>
        </div>
        {meses.length === 0 ? (
          <p className="ayuda">Sin datos todavía.</p>
        ) : (
          <div className="meses">
            {meses.map((mes) => (
              <div className="mes" key={mes.mes}>
                <div className="mes-barras" aria-hidden="true">
                  <div style={{ height: `${(mes.registrados / maximoMes) * 100}%` }} />
                  <div className="baja" style={{ height: `${(mes.bajas / maximoMes) * 100}%` }} />
                </div>
                <strong>{nombreMes(mes.mes)}</strong>
                <span>
                  {mes.registrados} {mes.registrados === 1 ? 'registrado' : 'registrados'} ·{' '}
                  {mes.bajas} {mes.bajas === 1 ? 'baja' : 'bajas'}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

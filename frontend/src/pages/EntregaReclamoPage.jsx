import React, { useState } from 'react';
import { entregarReclamoService } from '../services/reclamos.service';

export const EntregaReclamoPage = () => {
  const [idReclamo, setIdReclamo] = useState('15');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEntregar = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultado(null);

    try {
      const datosValidacion = {
        usuarioReclamante: "Juan Pérez",
        rutCedulaValidada: true,
        propiedadAcreditada: true,
        aprobadoPorEncargado: true,
        metodosAplicados: ["Cédula de identidad", "Boleta de compra"]
      };

      const respuesta = await entregarReclamoService(idReclamo, datosValidacion);
      setResultado(respuesta);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
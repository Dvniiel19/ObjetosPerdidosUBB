import axios from 'axios';

// URL base de tu backend local
const API_URL = 'http://localhost:3000/api';

export const entregarReclamoService = async (id, datosValidacion) => {
  try {
    const response = await axios.post(`\({API_URL}/reclamos/\){id}/entregar`, datosValidacion);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { error: 'Error de conexión con el servidor' };
  }
};
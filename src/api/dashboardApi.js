import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const obtenerDashboard = async () => {
  const [usuarios, complejos, reservas] = await Promise.all([
    axios.get(`${API_URL}/usuarios`, getConfig()),
    axios.get(`${API_URL}/complejos`),
    axios.get(`${API_URL}/reservas`, getConfig()),
  ]);

  return {
    usuarios: usuarios.data.length,
    complejos: complejos.data.length,
    reservas: reservas.data.length,
  };
};
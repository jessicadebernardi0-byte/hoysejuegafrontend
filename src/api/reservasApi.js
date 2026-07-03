import axios from "axios";

const API_URL = "http://localhost:5000/api/reservas";

const getConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const obtenerMisReservas = async () => {
  const response = await axios.get(`${API_URL}/mis-reservas`, getConfig());
  return response.data;
};

export const crearReserva = async (datos) => {
  const response = await axios.post(API_URL, datos, getConfig());
  return response.data;
};

export const cancelarMiReserva = async (id) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    { estado: "Cancelada" },
    getConfig()
  );

  return response.data;
};
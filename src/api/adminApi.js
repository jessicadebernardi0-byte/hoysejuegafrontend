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

/* ===========================
   RESERVAS
=========================== */

export const obtenerReservasAdmin = async () => {
  const response = await axios.get(`${API_URL}/reservas`, getConfig());
  return response.data;
};

export const actualizarReservaAdmin = async (id, data) => {
  const response = await axios.put(
    `${API_URL}/reservas/${id}`,
    data,
    getConfig()
  );

  return response.data;
};

export const eliminarReservaAdmin = async (id) => {
  const response = await axios.delete(
    `${API_URL}/reservas/${id}`,
    getConfig()
  );

  return response.data;
};

/* ===========================
   COMPLEJOS
=========================== */

export const obtenerComplejosAdmin = async () => {
  const response = await axios.get(`${API_URL}/complejos`);
  return response.data;
};

export const crearComplejoAdmin = async (data) => {
  const response = await axios.post(
    `${API_URL}/complejos`,
    data,
    getConfig()
  );

  return response.data;
};

export const editarComplejoAdmin = async (id, data) => {
  const response = await axios.put(
    `${API_URL}/complejos/${id}`,
    data,
    getConfig()
  );

  return response.data;
};

export const eliminarComplejoAdmin = async (id) => {
  const response = await axios.delete(
    `${API_URL}/complejos/${id}`,
    getConfig()
  );

  return response.data;
};
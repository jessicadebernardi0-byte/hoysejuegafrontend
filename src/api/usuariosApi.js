import axios from "axios";

const API_URL = "http://localhost:5000/api/usuarios";

const getConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const obtenerUsuarios = async () => {
  const response = await axios.get(API_URL, getConfig());
  return response.data;
};

export const cambiarRolUsuario = async (id, rol) => {
  const response = await axios.put(
    `${API_URL}/${id}/rol`,
    { rol },
    getConfig()
  );

  return response.data;
};

export const eliminarUsuario = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig());
  return response.data;
};
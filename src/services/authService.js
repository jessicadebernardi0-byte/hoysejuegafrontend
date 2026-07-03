import { login, register } from "../api/authApi";

export const loginService = async (data) => {
  return await login(data);
};

export const registerService = async (data) => {
  return await register(data);
};
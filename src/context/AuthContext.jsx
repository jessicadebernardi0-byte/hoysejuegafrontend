import { createContext, useContext, useState } from "react";
import { loginService, registerService } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  const login = async (data) => {
    try {
      const response = await loginService(data);

      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      localStorage.setItem("token", response.token);

      setUsuario(response.usuario);
      setToken(response.token);

      return {
        ok: true,
        usuario: response.usuario,
      };
    } catch (error) {
      return {
        ok: false,
        message:
          error.response?.data?.message ||
          "Error al iniciar sesión",
      };
    }
  };

  const register = async (data) => {
    try {
      const response = await registerService(data);

      return {
        ok: true,
        usuario: response.usuario,
      };
    } catch (error) {
      return {
        ok: false,
        message:
          error.response?.data?.message ||
          "Error al registrarse",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");

    setUsuario(null);
    setToken(null);
  };

  const isAuthenticated = !!usuario && !!token;
  const isAdmin = usuario?.rol === "admin";

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        login,
        register,
        logout,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
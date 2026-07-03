import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const result = await login({
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    if (result.usuario.rol === "admin") {
      navigate("/admin");
    } else {
      navigate("/perfil");
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <img src={logo} alt="Hoy Se Juega" className="auth-logo" />

        <h1>Iniciar sesión</h1>
        <p>Ingresá a tu cuenta para gestionar tus reservas.</p>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <span className="auth-link">
          ¿No tenés cuenta? <Link to="/register">Registrate</Link>
        </span>
      </section>
    </main>
  );
}

export default Login;
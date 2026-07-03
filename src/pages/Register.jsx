import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    telefono: "",
    ciudad: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    const result = await register({
      nombre: form.nombre,
      email: form.email,
      password: form.password,
      telefono: form.telefono,
      ciudad: form.ciudad,
    });

    setLoading(false);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    setSuccess("Cuenta creada correctamente. Ya podés iniciar sesión.");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <img src={logo} alt="Hoy Se Juega" className="auth-logo" />

        <h1>Crear cuenta</h1>
        <p>Registrate para reservar canchas y participar en torneos.</p>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            name="nombre"
            type="text"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="telefono"
            type="text"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
          />

          <input
            name="ciudad"
            type="text"
            placeholder="Ciudad"
            value={form.ciudad}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirmar contraseña"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creando cuenta..." : "Registrarme"}
          </button>
        </form>

        <span className="auth-link">
          ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
        </span>
      </section>
    </main>
  );
}

export default Register;


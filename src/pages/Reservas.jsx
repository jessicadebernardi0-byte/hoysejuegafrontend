import { useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import complejos from "../data/complejos";
import { crearReserva } from "../api/reservasApi";

function Reservas() {
  const location = useLocation();

  const complejo =
    location.state?.complejo || complejos[0];

  const [form, setForm] = useState({
    fecha: "",
    horario: "",
    cancha:
      location.state?.cancha || "Cancha 1 - Fútbol 5",
  });

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const horarios = [
    "18:00 hs",
    "19:00 hs",
    "20:00 hs",
    "21:00 hs",
    "22:00 hs",
  ];

  const seleccionarHorario = (hora) => {
    setForm({
      ...form,
      horario: hora,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const confirmarReserva = async () => {
    setMensaje("");
    setError("");

    if (!form.fecha || !form.horario || !form.cancha) {
      setError("Completá fecha, horario y cancha.");
      return;
    }

    try {
      await crearReserva({
        complejo: complejo.nombre,
        cancha: form.cancha,
        fecha: form.fecha,
        horario: form.horario,
      });

      setMensaje("Reserva creada correctamente.");

      setForm({
        fecha: "",
        horario: "",
        cancha:
          location.state?.cancha || "Cancha 1 - Fútbol 5",
      });
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Error al crear la reserva."
      );
    }
  };

  return (
    <>
      <Navbar />

      <main className="page">
        <section className="page-hero">
          <div className="container">
            <span>Reservas</span>

            <h1>Confirmá tu próximo partido</h1>

            <p>
              Elegí fecha, horario y cancha disponible.
            </p>
          </div>
        </section>

        <section className="container reserva-layout">
          <article className="reserva-card">
            <img
              src={complejo.imagen}
              alt={complejo.nombre}
            />

            <div className="reserva-info">
              <h2>{complejo.nombre}</h2>

              <p>📍 {complejo.ciudad}</p>

              <p>⚽ {complejo.deportes}</p>

              <strong>{complejo.precio} / hora</strong>
            </div>
          </article>

          <article className="reserva-form-box">
            <h2>Datos de la reserva</h2>

            {mensaje && (
              <div className="auth-success">
                {mensaje}
              </div>
            )}

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <label>Fecha</label>

            <input
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
            />

            <label>Horario disponible</label>

            <div className="horarios-grid">
              {horarios.map((hora) => (
                <button
                  type="button"
                  key={hora}
                  className={
                    form.horario === hora
                      ? "selected-hour"
                      : ""
                  }
                  onClick={() =>
                    seleccionarHorario(hora)
                  }
                >
                  {hora}
                </button>
              ))}
            </div>

            <label>Cancha</label>

            <select
              name="cancha"
              value={form.cancha}
              onChange={handleChange}
            >
              <option>Cancha 1 - Fútbol 5</option>
              <option>Cancha 2 - Fútbol 7</option>
              <option>Cancha 3 - Pádel</option>
            </select>

            <button
              className="confirm-reserva"
              onClick={confirmarReserva}
            >
              Confirmar reserva
            </button>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Reservas;
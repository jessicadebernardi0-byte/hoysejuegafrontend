import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import complejos from "../data/complejos";

function Complejos() {
  const [abierto, setAbierto] = useState(null);
  const navigate = useNavigate();

  const disponibilidad = [
    {
      cancha: "Cancha 1 - Fútbol 5",
      dia: "Hoy",
      horario: "18:00 hs",
      estado: "Disponible",
    },
    {
      cancha: "Cancha 2 - Fútbol 7",
      dia: "Hoy",
      horario: "20:00 hs",
      estado: "Ocupada",
    },
    {
      cancha: "Cancha 1 - Fútbol 5",
      dia: "Mañana",
      horario: "19:00 hs",
      estado: "Disponible",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="page">
        <section className="page-hero">
          <div className="container">
            <span>Complejos deportivos</span>
            <h1>Encontrá el lugar ideal para jugar</h1>
            <p>
              Buscá por zona, deporte o precio y reservá tu cancha favorita.
            </p>
          </div>
        </section>

        <section className="container page-content">
          <div className="filters-box">
            <input type="text" placeholder="Buscar complejo..." />

            <select>
              <option>Todas las ciudades</option>
              <option>Lanús</option>
              <option>Palermo</option>
              <option>Quilmes</option>
            </select>

            <select>
              <option>Todos los deportes</option>
              <option>Fútbol</option>
              <option>Pádel</option>
              <option>Tenis</option>
            </select>
          </div>

          <div className="complex-list">
            {complejos.map((complejo) => (
              <article className="complex-card" key={complejo.id}>
                <img src={complejo.imagen} alt={complejo.nombre} />

                <div className="complex-info">
                  <div className="rating">⭐ {complejo.puntuacion}</div>

                  <h2>{complejo.nombre}</h2>

                  <p className="city">📍 {complejo.ciudad}</p>

                  <p>⚽ {complejo.deportes}</p>

                  <div className="complex-footer">
                    <strong>{complejo.precio} / hora</strong>

                    <button
                      onClick={() =>
                        setAbierto(
                          abierto === complejo.id ? null : complejo.id
                        )
                      }
                    >
                      {abierto === complejo.id
                        ? "Ocultar"
                        : "Ver disponibilidad"}
                    </button>
                  </div>

                  {abierto === complejo.id && (
                    <div className="availability-box">
                      <h4>📅 Disponibilidad</h4>

                      {disponibilidad.map((item, index) => (
                        <div
                          key={index}
                          className="availability-item"
                        >
                          <strong>{item.cancha}</strong>

                          <p>
                            {item.dia} - {item.horario}
                          </p>

                          <span
                            className={
                              item.estado === "Disponible"
                                ? "status-confirmed"
                                : "status-pending"
                            }
                          >
                            {item.estado}
                          </span>
                        </div>
                      ))}

                      <button
  className="confirm-reserva"
  onClick={() =>
    navigate("/reservas", {
      state: {
        complejo,
      },
    })
  }
>
  Reservar ahora
</button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Complejos;
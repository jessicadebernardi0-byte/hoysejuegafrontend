import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useAuth } from "../context/AuthContext";
import { obtenerMisReservas, cancelarMiReserva } from "../api/reservasApi";

function Perfil() {
  const { usuario } = useAuth();

  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarReservas = async () => {
    try {
      setLoading(true);
      const data = await obtenerMisReservas();
      setReservas(data);
    } catch (error) {
      console.log("Error al cargar reservas", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarReservas();
  }, []);

  const cancelarReserva = async (id) => {
    const confirmar = window.confirm("¿Querés cancelar esta reserva?");

    if (!confirmar) return;

    await cancelarMiReserva(id);
    cargarReservas();
  };

  const reservasActivas = reservas.filter(
    (reserva) => reserva.estado !== "Cancelada"
  );

  const proximaReserva = reservasActivas[0];

  return (
    <>
      <Navbar />

      <main className="page">
        <section className="page-hero">
          <div className="container">
            <span>Mi cuenta</span>
            <h1>¡Hola, {usuario?.nombre}!</h1>
            <p>
              Bienvenido nuevamente a Hoy Se Juega. Desde aquí podés administrar
              tus reservas y tus datos personales.
            </p>
          </div>
        </section>

        <section className="container user-stats">
          <div className="stat-card">
            <span>📅</span>
            <h3>{reservas.length}</h3>
            <p>Reservas</p>
          </div>

          <div className="stat-card">
            <span>❤️</span>
            <h3>3</h3>
            <p>Favoritos</p>
          </div>

          <div className="stat-card">
            <span>⚽</span>
            <h3>12</h3>
            <p>Partidos</p>
          </div>

          <div className="stat-card">
            <span>🏆</span>
            <h3>2</h3>
            <p>Torneos</p>
          </div>
        </section>

        <section className="container profile-grid">
          <div className="profile-card">
            <div className="avatar">
              {usuario?.nombre?.charAt(0).toUpperCase()}
            </div>

            <h2>{usuario?.nombre}</h2>
            <p>{usuario?.email}</p>
            <p>📱 {usuario?.telefono || "Sin teléfono"}</p>
            <p>📍 {usuario?.ciudad || "Sin ciudad"}</p>
            <p>{usuario?.rol === "admin" ? "Administrador" : "Usuario"}</p>
            <p>Miembro de Hoy Se Juega</p>

            <button>Editar Perfil</button>
          </div>

          <div>
            {proximaReserva && (
              <div className="next-booking">
                <span>Tu próximo partido</span>
                <h2>{proximaReserva.complejo}</h2>
                <p>
                  {proximaReserva.fecha} - {proximaReserva.horario}
                </p>
                <p>{proximaReserva.cancha}</p>
                <strong>{proximaReserva.estado}</strong>
                <button>Ver detalle</button>
              </div>
            )}

            <div className="profile-section">
              <h2>Mis Reservas</h2>

              {loading ? (
                <p>Cargando reservas...</p>
              ) : reservas.length === 0 ? (
                <p>No tenés reservas registradas.</p>
              ) : (
                reservas.map((reserva) => (
                  <div className="reservation-item" key={reserva._id}>
                    <div>
                      <strong>{reserva.complejo}</strong>

                      <span>
                        {reserva.fecha} - {reserva.horario}
                      </span>

                      <small>{reserva.cancha}</small>
                    </div>

                    <div className="reservation-actions">
                      <span
                        className={
                          reserva.estado === "Confirmada"
                            ? "status-confirmed"
                            : reserva.estado === "Cancelada"
                            ? "status-cancelled"
                            : "status-pending"
                        }
                      >
                        {reserva.estado}
                      </span>

                      {reserva.estado !== "Cancelada" && (
                        <button
                          className="cancel-btn"
                          onClick={() => cancelarReserva(reserva._id)}
                        >
                          Cancelar
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="profile-section">
              <h2>Favoritos</h2>

              <ul>
                <li>Arena Sports</li>
                <li>Complejo Norte</li>
                <li>Club Lanús</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Perfil;
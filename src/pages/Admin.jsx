import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { obtenerDashboard } from "../api/dashboardApi";
import {
  obtenerReservasAdmin,
  obtenerComplejosAdmin,
  crearComplejoAdmin,
  editarComplejoAdmin,
  eliminarComplejoAdmin,
  actualizarReservaAdmin,
  eliminarReservaAdmin,
} from "../api/adminApi";

function Admin() {
  const [reservas, setReservas] = useState([]);
  const [complejos, setComplejos] = useState([]);

  const [dashboard, setDashboard] = useState({
    usuarios: 0,
    complejos: 0,
    reservas: 0,
  });

  const [form, setForm] = useState({
    nombre: "",
    ciudad: "",
    direccion: "",
    deportes: "",
    precio: "",
    puntuacion: 4.5,
    imagen: "",
  });

  const [editando, setEditando] = useState(false);
  const [idEditar, setIdEditar] = useState(null);

  const cargarDatos = async () => {
    try {
      const reservasData = await obtenerReservasAdmin();
      const complejosData = await obtenerComplejosAdmin();
      const dashboardData = await obtenerDashboard();

      setReservas(reservasData);
      setComplejos(complejosData);
      setDashboard(dashboardData);
    } catch (error) {
      console.error("Error al cargar datos del admin:", error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const editarComplejo = (complejo) => {
    setEditando(true);
    setIdEditar(complejo._id);

    setForm({
      nombre: complejo.nombre || "",
      ciudad: complejo.ciudad || "",
      direccion: complejo.direccion || "",
      deportes: complejo.deportes || "",
      precio: complejo.precio || "",
      puntuacion: complejo.puntuacion || 4.5,
      imagen: complejo.imagen || "",
    });
  };

  const cancelarEdicion = () => {
    setEditando(false);
    setIdEditar(null);

    setForm({
      nombre: "",
      ciudad: "",
      direccion: "",
      deportes: "",
      precio: "",
      puntuacion: 4.5,
      imagen: "",
    });
  };

  const guardarComplejo = async (e) => {
    e.preventDefault();

    if (editando) {
      await editarComplejoAdmin(idEditar, form);
    } else {
      await crearComplejoAdmin(form);
    }

    cancelarEdicion();
    cargarDatos();
  };

  const eliminarComplejo = async (id) => {
    const confirmar = window.confirm("¿Querés eliminar este complejo?");

    if (!confirmar) return;

    await eliminarComplejoAdmin(id);
    cargarDatos();
  };

  const cambiarEstadoReserva = async (id, estado) => {
    await actualizarReservaAdmin(id, { estado });
    cargarDatos();
  };

  const eliminarReserva = async (id) => {
    const confirmar = window.confirm("¿Querés eliminar esta reserva?");

    if (!confirmar) return;

    await eliminarReservaAdmin(id);
    cargarDatos();
  };

  return (
    <>
      <Navbar />

      <main className="page">
        <section className="page-hero">
          <div className="container">
            <span>Administración</span>
            <h1>Panel de Control</h1>
            <p>Gestioná reservas, complejos y datos principales.</p>
          </div>
        </section>

        <section className="container dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-icon">📅</div>
            <h2>{dashboard.reservas}</h2>
            <p>Reservas</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">🏟️</div>
            <h2>{dashboard.complejos}</h2>
            <p>Complejos</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">👥</div>
            <h2>{dashboard.usuarios}</h2>
            <p>Usuarios</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">🏆</div>
            <h2>0</h2>
            <p>Torneos</p>
          </div>
        </section>

        <section className="container admin-form-box">
          <h2>{editando ? "Editar complejo" : "Crear complejo"}</h2>

          <form className="admin-form" onSubmit={guardarComplejo}>
            <input
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />

            <input
              name="ciudad"
              placeholder="Ciudad"
              value={form.ciudad}
              onChange={handleChange}
              required
            />

            <input
              name="direccion"
              placeholder="Dirección"
              value={form.direccion}
              onChange={handleChange}
            />

            <input
              name="deportes"
              placeholder="Deportes"
              value={form.deportes}
              onChange={handleChange}
              required
            />

            <input
              name="precio"
              placeholder="Precio"
              value={form.precio}
              onChange={handleChange}
              required
            />

            <input
              name="imagen"
              placeholder="URL de imagen"
              value={form.imagen}
              onChange={handleChange}
            />

            <button type="submit">
              {editando ? "Guardar cambios" : "Crear complejo"}
            </button>

            {editando && (
              <button type="button" className="cancel-btn" onClick={cancelarEdicion}>
                Cancelar edición
              </button>
            )}
          </form>
        </section>

        <section className="container admin-table">
          <h2>Complejos cargados</h2>

          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Ciudad</th>
                <th>Deportes</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {complejos.map((complejo) => (
                <tr key={complejo._id}>
                  <td>{complejo.nombre}</td>
                  <td>{complejo.ciudad}</td>
                  <td>{complejo.deportes}</td>
                  <td>{complejo.precio}</td>
                  <td>
                    <div className="admin-actions">
                      <button
                        className="edit-btn"
                        onClick={() => editarComplejo(complejo)}
                      >
                        Editar
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => eliminarComplejo(complejo._id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="container admin-table">
          <h2>Reservas realizadas</h2>

          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Complejo</th>
                <th>Fecha</th>
                <th>Horario</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {reservas.map((reserva) => (
                <tr key={reserva._id}>
                  <td>{reserva.usuario?.nombre || "Usuario"}</td>
                  <td>{reserva.complejo}</td>
                  <td>{reserva.fecha}</td>
                  <td>{reserva.horario}</td>
                  <td>
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
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button
                        className="confirm-btn"
                        onClick={() =>
                          cambiarEstadoReserva(reserva._id, "Confirmada")
                        }
                      >
                        Confirmar
                      </button>

                      <button
                        className="cancel-btn"
                        onClick={() =>
                          cambiarEstadoReserva(reserva._id, "Cancelada")
                        }
                      >
                        Cancelar
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => eliminarReserva(reserva._id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Admin;
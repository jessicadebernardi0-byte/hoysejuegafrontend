import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  obtenerReservasAdmin,
  obtenerComplejosAdmin,
  crearComplejoAdmin,
  eliminarComplejoAdmin,
} from "../api/adminApi";

function Admin() {
  const [reservas, setReservas] = useState([]);
  const [complejos, setComplejos] = useState([]);

  const [form, setForm] = useState({
    nombre: "",
    ciudad: "",
    direccion: "",
    deportes: "",
    precio: "",
    puntuacion: 4.5,
    imagen: "",
  });

  const cargarDatos = async () => {
    const reservasData = await obtenerReservasAdmin();
    const complejosData = await obtenerComplejosAdmin();

    setReservas(reservasData);
    setComplejos(complejosData);
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

  const crearComplejo = async (e) => {
    e.preventDefault();

    await crearComplejoAdmin(form);

    setForm({
      nombre: "",
      ciudad: "",
      direccion: "",
      deportes: "",
      precio: "",
      puntuacion: 4.5,
      imagen: "",
    });

    cargarDatos();
  };

  const eliminarComplejo = async (id) => {
    await eliminarComplejoAdmin(id);
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
            <h2>{reservas.length}</h2>
            <p>Reservas</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">🏟️</div>
            <h2>{complejos.length}</h2>
            <p>Complejos</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">👥</div>
            <h2>--</h2>
            <p>Usuarios</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">🏆</div>
            <h2>--</h2>
            <p>Torneos</p>
          </div>
        </section>

        <section className="container admin-form-box">
          <h2>Crear complejo</h2>

          <form className="admin-form" onSubmit={crearComplejo}>
            <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
            <input name="ciudad" placeholder="Ciudad" value={form.ciudad} onChange={handleChange} required />
            <input name="direccion" placeholder="Dirección" value={form.direccion} onChange={handleChange} />
            <input name="deportes" placeholder="Deportes" value={form.deportes} onChange={handleChange} required />
            <input name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} required />
            <input name="imagen" placeholder="URL de imagen" value={form.imagen} onChange={handleChange} />

            <button type="submit">Crear complejo</button>
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
                <th>Acción</th>
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
                    <button
                      className="delete-btn"
                      onClick={() => eliminarComplejo(complejo._id)}
                    >
                      Eliminar
                    </button>
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
              </tr>
            </thead>

            <tbody>
              {reservas.map((reserva) => (
                <tr key={reserva._id}>
                  <td>{reserva.usuario?.nombre || "Usuario"}</td>
                  <td>{reserva.complejo}</td>
                  <td>{reserva.fecha}</td>
                  <td>{reserva.horario}</td>
                  <td>{reserva.estado}</td>
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
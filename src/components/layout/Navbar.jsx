import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const { usuario, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [abierto, setAbierto] = useState(false);

  const cerrarMenu = () => setAbierto(false);

  const cerrarSesion = () => {
    cerrarMenu();
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="container header-container">

        <Link to="/" className="logo" onClick={cerrarMenu}>
          <img src={logo} alt="Hoy Se Juega" />
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setAbierto(!abierto)}
          aria-label="Abrir menú"
        >
          {abierto ? "✕" : "☰"}
        </button>

        <div className={`header-menu ${abierto ? "open" : ""}`}>

          <nav className="nav">
            <Link to="/" onClick={cerrarMenu}>Inicio</Link>
            <Link to="/complejos" onClick={cerrarMenu}>Complejos</Link>
            <Link to="/reservas" onClick={cerrarMenu}>Reservas</Link>

            {isAuthenticated && (
              <Link to="/perfil" onClick={cerrarMenu}>Mi Perfil</Link>
            )}

            {isAdmin && (
              <Link to="/admin" onClick={cerrarMenu}>Panel Admin</Link>
            )}
          </nav>

          <div className="header-buttons">

            {!isAuthenticated ? (
              <>
                <Link to="/login" className="btn btn-outline" onClick={cerrarMenu}>
                  Iniciar sesión
                </Link>

                <Link to="/register" className="btn btn-primary" onClick={cerrarMenu}>
                  Registrarse
                </Link>
              </>
            ) : (
              <>
                <span className="user-name">
                  👋 {usuario.nombre}
                </span>

                <button
                  className="btn btn-primary"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </button>
              </>
            )}

          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;
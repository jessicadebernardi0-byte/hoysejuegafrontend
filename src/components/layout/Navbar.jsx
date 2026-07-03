import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const { usuario, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="container header-container">

        <Link to="/" className="logo">
          <img src={logo} alt="Hoy Se Juega" />
        </Link>

        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/complejos">Complejos</Link>
          <Link to="/reservas">Reservas</Link>

          {isAuthenticated && (
            <Link to="/perfil">Mi Perfil</Link>
          )}

          {isAdmin && (
            <Link to="/admin">Panel Admin</Link>
          )}
        </nav>

        <div className="header-buttons">

          {!isAuthenticated ? (
            <>
              <Link to="/login" className="btn btn-outline">
                Iniciar sesión
              </Link>

              <Link to="/register" className="btn btn-primary">
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
    </header>
  );
}

export default Navbar;
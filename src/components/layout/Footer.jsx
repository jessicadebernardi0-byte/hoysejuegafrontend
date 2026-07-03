import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div className="footer-brand">
          <h2>⚽ Hoy Se Juega</h2>

          <p>
            Plataforma web para buscar complejos deportivos,
            reservar canchas y organizar partidos de forma
            rápida, simple y segura.
          </p>
        </div>

        <div className="footer-column">
          <h3>Enlaces rápidos</h3>

          <Link to="/">Inicio</Link>

          <Link to="/complejos">Complejos</Link>

          <Link to="/reservas">Reservas</Link>

          <Link to="/login">Iniciar sesión</Link>

          <Link to="/register">Registrarse</Link>
        </div>

        <div className="footer-column">
          <h3>Contacto</h3>

          <p>📍 Buenos Aires, Argentina</p>

          <p>📧 contacto@hoysejuega.com</p>

          <p>📞 +54 11 5566-7788</p>
        </div>

        <div className="footer-column">

          <h3>Redes sociales</h3>

          <div className="footer-social">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
               Instagram
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
               Facebook
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
            >
               TikTok
            </a>

            <a
              href="https://wa.me/541155667788"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Hoy Se Juega. Todos los derechos reservados.
        </p>

        <div className="footer-links">

          <a href="#">Política de privacidad</a>

          <a href="#">Términos y condiciones</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
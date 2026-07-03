import complejos from "../../data/complejos";
import { Link } from "react-router-dom";


function Featured() {
  return (
    <section className="featured section">
      <div className="container">
        <div className="section-title">
          <span>Complejos destacados</span>
          <h2>Reservá en los mejores lugares</h2>
          <p>Elegí complejos deportivos con buena ubicación, disponibilidad y valoración.</p>
        </div>

        <div className="featured-grid">
          {complejos.map((complejo) => (
            <article className="featured-card" key={complejo.id}>
              <div className="featured-img-box">
                <img src={complejo.imagen} alt={complejo.nombre} />
                <button className="favorite-btn" aria-label="Agregar a favoritos">🤍</button>
                <span className="available-badge">Disponible</span>
              </div>

              <div className="featured-content">
                <div className="rating">⭐ {complejo.puntuacion}</div>

                <h3>{complejo.nombre}</h3>
                <p className="city">📍 {complejo.ciudad}</p>
                <p className="sport-tag">⚽ {complejo.deportes}</p>

                <div className="featured-price">
              <span>Desde</span>
              <strong>{complejo.precio} / hora</strong>
              </div>

            <Link to="/reservas" className="reserve-btn">
               Reservar ahora
            </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

const sports = ["Fútbol", "Pádel", "Tenis", "Hockey"];

function Sports() {
  return (
    <section className="section deportes">
      <div className="container">
        <div className="section-title">
          <span>Deportes disponibles</span>
          <h2>Elegí cómo querés jugar</h2>
        </div>

        <div className="deportes-grid">
          {sports.map((sport) => (
            <article className="deporte-card" key={sport}>
              <div className="sport-icon">🏟️</div>
              <h3>{sport}</h3>
              <p>Reservá turnos disponibles en tu zona.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sports;
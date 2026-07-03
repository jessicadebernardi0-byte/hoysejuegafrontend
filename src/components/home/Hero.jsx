import { useNavigate } from "react-router-dom";
import hero from "../../assets/images/hero.jpg";

function Hero() {
  const navigate = useNavigate();

  const buscarComplejos = () => {
    navigate("/complejos");
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(5,11,17,.65), rgba(5,11,17,.65)), url(${hero})`,
      }}
    >
      <div className="container hero-container">
        <div className="hero-left">

          <span className="hero-badge">
            Reservá online, jugá sin vueltas
          </span>

          <h1>
            Tu cancha,
            <br />
            <span>tu momento.</span>
          </h1>

          <p>
            Reservá online en los mejores complejos deportivos
            de tu ciudad.
          </p>

          <div className="search-bar">

            <input
              type="text"
              placeholder="📍 ¿Dónde querés jugar?"
            />

            <select>
              <option>⚽ Deporte</option>
              <option>Fútbol</option>
              <option>Pádel</option>
              <option>Tenis</option>
              <option>Hockey</option>
            </select>

            <input type="date" />

            <select>
              <option>🕒 Horario</option>
              <option>Mañana</option>
              <option>Tarde</option>
              <option>Noche</option>
            </select>

            <button
              type="button"
              onClick={buscarComplejos}
            >
              Buscar
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
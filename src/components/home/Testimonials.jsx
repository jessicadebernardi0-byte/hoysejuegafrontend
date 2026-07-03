function Testimonials() {

  const opiniones = [
    {
      nombre: "Leonel Gomez",
      ciudad: "Lomas de Zamora",
      comentario:
        "Reservé una cancha en menos de un minuto. Muy fácil de usar.",
    },
    {
      nombre: "Gabriel Aguirre",
      ciudad: "Adrogue",
      comentario:
        "Encontré disponibilidad enseguida y el complejo era excelente.",
    },
    {
      nombre: "Elisa DB",
      ciudad: "Brandsen",
      comentario:
        "Muy recomendable. El proceso fue rápido y seguro.",
    },
  ];

  return (
    <section className="testimonials section">
      <div className="container">

        <div className="section-title">
          <span>Opiniones</span>
          <h2>Lo que dicen nuestros usuarios</h2>
        </div>

        <div className="testimonials-grid">

          {opiniones.map((opinion, index) => (

            <div className="testimonial-card" key={index}>

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="testimonial-text">
                "{opinion.comentario}"
              </p>

              <h3>{opinion.nombre}</h3>

              <span>{opinion.ciudad}</span>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
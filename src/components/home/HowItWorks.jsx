function HowItWorks() {

  const pasos = [
    {
      numero: "01",
      titulo: "Elegí el deporte",
      descripcion:
        "Seleccioná fútbol, pádel, tenis, hockey o el deporte que quieras practicar.",
      icono: "⚽",
    },
    {
      numero: "02",
      titulo: "Buscá un complejo",
      descripcion:
        "Encontrá complejos cercanos con disponibilidad en tiempo real.",
      icono: "📍",
    },
    {
      numero: "03",
      titulo: "Elegí día y horario",
      descripcion:
        "Consultá horarios disponibles y reservá en segundos.",
      icono: "📅",
    },
    {
      numero: "04",
      titulo: "Confirmá la reserva",
      descripcion:
        "Recibí la confirmación y disfrutá tu partido sin preocupaciones.",
      icono: "✅",
    },
  ];

  return (
    <section className="how section">

      <div className="container">

        <div className="section-title">
          <span>¿Cómo funciona?</span>
          <h2>Reservar una cancha nunca fue tan fácil</h2>
        </div>

        <div className="how-grid">

          {pasos.map((paso) => (

            <div className="how-card" key={paso.numero}>

              <div className="how-number">
                {paso.numero}
              </div>

              <div className="how-icon">
                {paso.icono}
              </div>

              <h3>{paso.titulo}</h3>

              <p>{paso.descripcion}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;
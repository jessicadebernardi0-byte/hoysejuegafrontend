const benefits = [
  {
    icon: "⚡",
    title: "Reserva rápida",
    text: "Encontrá tu cancha disponible y reservá en menos de un minuto."
  },
  {
    icon: "💳",
    title: "Pago seguro",
    text: "Pagá online con distintos medios y recibí la confirmación al instante."
  },
  {
    icon: "📱",
    title: "Desde cualquier lugar",
    text: "Gestioná tus reservas desde la computadora o el celular."
  }
];

function Benefits() {
  return (
    <section className="benefits section">

      <div className="container">

        <div className="section-title">

          <span>Ventajas</span>

          <h2>¿Por qué elegir Hoy Se Juega?</h2>

        </div>

        <div className="benefits-grid">

          {benefits.map((item) => (

            <article className="benefit-card" key={item.title}>

              <div className="benefit-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Benefits;
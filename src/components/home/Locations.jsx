function Locations() {

    const ciudades = [

        "Palermo",

        "Lanús",

        "Quilmes",

        "Avellaneda",

        "Caballito",

        "Lomas de Zamora",

        "Belgrano",

        "Villa Urquiza"

    ];

    return (

        <section className="locations section">

            <div className="container">

                <div className="section-title">

                    <span>Ubicaciones</span>

                    <h2>Encontrá un complejo cerca tuyo</h2>

                </div>

                <div className="locations-grid">

                    {ciudades.map((ciudad) => (

                        <button
                            key={ciudad}
                            className="location-btn"
                        >
                            📍 {ciudad}
                        </button>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Locations;
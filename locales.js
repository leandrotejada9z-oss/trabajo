
const locales = [
    { nombre: "Buenos Aires", posicion: [-34.9214, -57.9544], id: "localBuenosAires" },
   { nombre: "CABA", posicion: [-34.6033, -58.4108], id: "localCABA" },
{ nombre: "San Juan", posicion: [-31.5204, -68.5428], id: "localSanJuan" },
    { nombre: "Mendoza", posicion: [-32.8867, -68.7937], id: "localMendoza" },
{ nombre: "Córdoba", posicion: [-31.3695, -64.2083], id: "localCordoba" },
{ nombre: "Santa Fe", posicion: [-32.9067, -60.6853], id: "localSantaFe" },
{ nombre: "Tierra del Fuego", posicion: [-54.8142, -68.3270], id: "localTierraDelFuego" },
{ nombre: "Neuquén", posicion: [-38.9517, -68.0600], id: "localNeuquen" },
{ nombre: "Tucumán", posicion: [-26.8153, -65.2695], id: "localTucuman" }
];

const mapa = L.map("mapaLocales").setView([-35.5, -64], 4);

const iconoCuervo = L.divIcon({
    className: "marcador-cuervo",
    html: `
        <div class="pin-cuervo">
            <img src="IMAGENES HOME/cuervoblack.png" alt="Cuervo">
        </div>
    `,
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -45]
});
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
    referrerPolicy: "strict-origin-when-cross-origin"
}).addTo(mapa);

locales.forEach((local) => {
    const marcador = L.marker(local.posicion, {
    icon: iconoCuervo
}).addTo(mapa);

    marcador.bindPopup(`<strong>CUERVO - ${local.nombre}</strong>`);

marcador.on("click", () => {
    mapa.flyTo(local.posicion, 16, {
        duration: 1.2
    });
});

    const boton = document.querySelector(
        `[data-bs-target="#${local.id}"]`
    );

    if (boton) {
        boton.addEventListener("click", () => {
            mapa.setView(local.posicion, 8);
        });
    }
});

const productos = document.querySelectorAll(".tarjetaPrenda");

document.querySelector(".btn-buscar").addEventListener("click", () => {

    // CATEGORIAS SELECCIONADAS
    const categorias = [];

    document.querySelectorAll(".categorias input:checked").forEach((opcion) => {
        categorias.push(opcion.id.replace("opcion-", ""));
    });

    // TALLES SELECCIONADOS
    const talles = [];

    document.querySelectorAll(".talles input:checked").forEach((opcion) => {
        talles.push(opcion.id.replace("talle", ""));
    });

    // PRECIO SELECCIONADO
    const precio = document.querySelector(".precios input:checked");

    productos.forEach((producto) => {


        const categoria = producto.dataset.categoria;
        const tallesProducto = producto.dataset.talles.split(" ");
        const precioProducto = Number(producto.dataset.precio);

        console.log(categoria, tallesProducto, precioProducto);

        let mostrar = true;

        // FILTRO DE CATEGORIA
        if (categorias.length > 0 && !categorias.includes("todos")) {
            if (!categorias.includes(categoria)) {
                mostrar = false;
            }
        }

        // FILTRO DE TALLE
        if (talles.length > 0) {
            if (!talles.some(talle => tallesProducto.includes(talle))) {
                mostrar = false;
            }
        }

        // FILTRO DE PRECIO
        if (precio) {
            if (precio.id === "hasta40" && precioProducto > 40000) {
                mostrar = false;
            }

            if (precio.id === "hasta70" && (precioProducto < 40000 || precioProducto > 70000)) {
                mostrar = false;
            }

            if (precio.id === "hasta100" && (precioProducto < 70000 || precioProducto > 100000)) {
                mostrar = false;
            }

            if (precio.id === "mas100" && precioProducto <= 100000) {
                mostrar = false;
            }
        }

        // MOSTRAR U OCULTAR PRODUCTO
       producto.parentElement.parentElement.style.display = mostrar ? "" : "none";

    });

});
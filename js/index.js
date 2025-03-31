// Variables y constantes
const productos = [
    { id: 1, nombre: "Laptop", precio: 800 },
    { id: 2, nombre: "Mouse", precio: 20 },
    { id: 3, nombre: "Teclado", precio: 50 }
];
let carrito = [];

// Función para mostrar productos
function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach(producto => {
        console.log(`${producto.id}: ${producto.nombre} - $${producto.precio}`);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito() {
    let productoId = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
    let productoEncontrado = productos.find(prod => prod.id === productoId);
    
    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        alert(`${productoEncontrado.nombre} agregado al carrito.`);
    } else {
        alert("Producto no encontrado.");
    }
}

// Función para ver el carrito
function verCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        console.log("Carrito de compras:");
        carrito.forEach(item => {
            console.log(`${item.nombre} - $${item.precio}`);
        });
        let total = carrito.reduce((acc, item) => acc + item.precio, 0);
        console.log(`Total: $${total}`);
    }
}

// Función para realizar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("No hay productos en el carrito para comprar.");
        return;
    }
    let confirmar = confirm("¿Desea finalizar la compra?");
    if (confirmar) {
        alert("Compra realizada con éxito. Gracias por su compra!");
        carrito = []; // Vaciamos el carrito
    }
}

// Ejecución del programa
mostrarProductos();
let continuar = true;
while (continuar) {
    let opcion = prompt("Elija una opción:\n1. Agregar al carrito\n2. Ver carrito\n3. Finalizar compra\n4. Salir");
    switch (opcion) {
        case "1":
            agregarAlCarrito();
            break;
        case "2":
            verCarrito();
            break;
        case "3":
            finalizarCompra();
            break;
        case "4":
            continuar = false;
            alert("Gracias por visitar nuestra tienda.");
            break;
        default:
            alert("Opción no válida. Intente nuevamente.");
    }
}
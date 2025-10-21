var productos = []

function agregarProducto(codigo, nombre, precio, stock, estado) {
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].codigo === codigo) {
      console.log("Error: el codigo ya existe.")
      return
    }
  }
  if (precio <= 0 || stock < 0) {
    console.log("Error: precio o stock no validos.")
    return
  }
  var nuevoProducto = {
    codigo: codigo,
    nombre: nombre,
    precio: precio,
    stock: stock,
    estado: estado
  }
  productos.push(nuevoProducto)
  console.log("Producto agregado con exito.")
}
function actualizarStock(codigo, nuevoStock) {
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].codigo === codigo) {
      if (nuevoStock < 0) {
        console.log("Error: el stock no puede ser negativo.")
        return
      }
      productos[i].stock = nuevoStock
      productos[i].estado = nuevoStock > 0 ? " Disponible" : "Agotado"
      console.log("Stock actualizado con exito")
      return
    }
  }
  console.log("Error: producto no encontrado")
}
function listarProductos() {
  var listaOrdenada = productos.slice().sort(function(a, b) {
    return a.nombre.localeCompare(b.nombre)
  })
  console.log("Lista de productos:")
  for (var i = 0; i < listaOrdenada.length; i++) {
    var p = listaOrdenada[i]
    console.log("Codigo: " + p.codigo + ", Nombre: " + p.nombre + ", Precio: " + p.precio + ", Stock: " + p.stock + ", Estado: " + p.estado)
  }
}
agregarProducto("A01", "Camisa", 30000, 10, "Disponible")
agregarProducto("A02", "Pantalon", 50000, 5, "Disponible")
agregarProducto("A03", "Zapatos", 80000, 0, "Agotado")
actualizarStock("A02", 0)
listarProductos();

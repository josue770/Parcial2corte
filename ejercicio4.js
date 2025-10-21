var IVA = 0.19
function registrarVenta() {
  var productos = [
    { precio: 10000, cantidad: 2 },
    { precio: 5000, cantidad:3 },
    { precio: 20000, cantidad:1 }
  ]
  for (var i = 0; i < productos.length; i++) {
    productos[i].totalParcial = productos[i].precio * productos[i].cantidad
  }
  var subtotal = 0
  for (var i = 0; i < productos.length; i++) {
    subtotal += productos[i].totalParcial
  }

  var iva = subtotal * IVA
  var total = subtotal + iva

  console.log("resumen de la compra:")
  for (var i = 0; i < productos.length; i++) {
    console.log(
      "Producto " + (i + 1) +
      ": Precio " + productos[i].precio +
      ", Cantidad " + productos[i].cantidad +
      ", Total parcial " + productos[i].totalParcial
    )
  }
  console.log("Subtotal: " + subtotal.toFixed(2))
  console.log("IVA (19%): " + iva.toFixed(2))
  console.log("Total a pagar: " + total.toFixed(2))
}
registrarVenta()

let libros = [];
function agregarLibro(titulo, autor, año, isbn) {
  libros.push({ titulo, autor, año, isbn });
}
function listaLibros() {
  console.log("Lista de libros registrados:");
  libros.forEach((libro, i) => {
    console.log(`${i + 1}. ${libro.titulo} - ${libro.autor} (${libro.año}) [ISBN: ${libro.isbn}]`);
  });
}
function buscarLibroPorTitulo(titulo) {
  const resultado = libros.filter(libro => libro.titulo.toLowerCase().includes(titulo.toLowerCase()));
  console.log(resultado.length ? resultado : "No se encontraron libros con ese titulo.");
}

function buscarLibroPorAutor(autor) {
  const resultado = libros.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
  console.log(resultado.length? resultado : "No se encontraron libros con ese autor.");
}
agregarLibro("Cien años de soledad", "Gabriel Garcia Marquez", 1967, "12345");
agregarLibro("El principito", "Antoine de Saint-Exupery", 1943, "67890");
listaLibros();
buscarLibroPorAutor("Gabriel");


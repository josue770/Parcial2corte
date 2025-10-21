let estudiantes = [
  {
    cedula: "0951234567",
    apellidos: "Garcia Perez",
    nombres:"Maria Jose",
    programaAcademico:"Ingenieria en Sistemas",
    materias: ["Algoritmo", "Calculo", "Ingles"],
    promedioNota: 8.75
  },
  {
    cedula:"0987654321",
    apellidos: "Martinez Lopez",
    nombres: "Carlos Andres",
    programaAcademico: "Medicina",
    materias: ["Quimica", "Biologia", "Ingles"],
    promedioNota: 9.10
  },
  {
    cedula: "0912345678",
    apellidos:"Rodriguez Sanchez",
    nombres: "Ana Lucia",
    programaAcademico: "Derecho",
    materias: ["Humanidades", "Procesal", "Ingles"],
    promedioNota: 8.95
  },
  {
    cedula: "0976543210",
    apellidos: "Torres Zambrano",
    nombres: "Diego Alejandro",
    programaAcademico: "Arquitectura",
    materias: ["Diseno", "Calculo", "Ingles"],
    promedioNota: 8.50
  },
  {
    cedula: "0998765432",
    apellidos: "Vera Castillo",
    nombres: "Sofia Valentina",
    programaAcademico: "Psicologia",
    materias: ["Psicologia", "Sociales", "Humanidades"],
    promedioNota: 9.25
  }
]

function listarEstudiantes() {
  let ordenados =[...estudiantes].sort((a, b) => a.apellidos.localeCompare(b.apellidos))
  console.log("Listado de estudiantes ordenado por apellidos:")
  ordenados.forEach(est => {
    console.log(`${est.apellidos}, ${est.nombres} - Cedula: ${est.cedula}`)
  })
}

function agregarEstudiante(nuevo) {
  let existe = estudiantes.some(est => est.cedula === nuevo.cedula)
  if (existe) {
    console.log("Ya existe un estudiante con esa cedula.")
  } else {
    estudiantes.push(nuevo)
    console.log("Estudiante agregado correctamente.")
  }
}

function buscarEstudiante(cedula) {
  let encontrado = estudiantes.find(est => est.cedula === cedula)
  if (encontrado) {
    console.log("Estudiante encontrado:", encontrado)
  } else {
    console.log("No se encontro ningun estudiante con esa cedula.")
  }
}

function actualizarEstudiante(cedula, nuevosDatos) {
  let index = estudiantes.findIndex(est => est.cedula === cedula)
  if (index !== -1) {
    estudiantes[index] = { ...estudiantes[index], ...nuevosDatos }
    console.log("Datos del estudiante actualizados correctamente.")
  } else {
    console.log("No se encontro ningun estudiante con esa cedula.")
  }
}

function eliminarEstudiante(cedula) {
  let index = estudiantes.findIndex(est => est.cedula === cedula)
  if (index !== -1) {
    estudiantes.splice(index, 1)
    console.log("Estudiante eliminado correctamente.")
  } else {
    console.log("No se encontro ningun estudiante con esa cedula.")
  }
}
listarEstudiantes();
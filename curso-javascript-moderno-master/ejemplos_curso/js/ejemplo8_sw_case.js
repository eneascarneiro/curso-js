function ejecutar(){
switch (document.getElementById("txtNombreAlumno").value) {
    case 'José Manuel':
        document.getElementById("txtResultado").value = "Aroca"
      break;
    case 'Hadi Abbas':
        document.getElementById("txtResultado").value = "Ali Hassan"
      break;
    case 'Alejandro':
        document.getElementById("txtResultado").value = "Bayon"
      break;
    case 'Juan José':
        document.getElementById("txtResultado").value = "Llerandi"
      break;
    case 'Virginia':
    case 'Luis':
        document.getElementById("txtResultado").value = "Bermudez"
      break;
    default:
        document.getElementById("txtResultado").value = "Alumno no dado de altas"
  
  }
}
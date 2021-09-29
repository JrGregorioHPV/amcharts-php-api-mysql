<?php
// Conexion a la Base de Datos
$Servidor = "localhost";
$Usuario = "root";
$Password = "";
$BD = "articulos";

$Conexion = new mysqli($Servidor, $Usuario, $Password, $BD);
mysqli_set_charset($Conexion, "utf8");

// Consulta todos los registros de la tabla "empleados"
$sqlEmpleados = mysqli_query($Conexion, "SELECT * FROM productos");
if(mysqli_num_rows($sqlEmpleados) > 0){
    $empleados = mysqli_fetch_all($sqlEmpleados, MYSQLI_ASSOC);
    echo json_encode($empleados);
}
else {
    echo json_encode(["success" => 0]);
}

?>
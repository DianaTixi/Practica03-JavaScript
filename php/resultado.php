<?php
    $cedula= $_POST['ced'];
    $nombre= $_POST['nom'];
    $apellido= $_POST['ape'];
    $direccion= $_POST['dir'];
    $telefono= $_POST['tel'];
    $fechaNac= $_POST['fecN'];
    $email= $_POST['correo'];
    $contrasena= $_POST['contra'];

    echo  "Cedula: ". $cedula."<br/>" ;
    echo  "Nombre: ". $nombre."<br/>";
    echo  "Apellido: ". $apellido."<br/>";
    echo  "Direccion: ". $direccion."<br/>";
    echo  "Telefono: ". $telefono."<br/>";
    echo  "Fecha Nacimiento: ". $fechaNac."<br/>";
    echo  "Email: ". $email."<br/>";
    echo  "Contraseña: ". $contrasena."<br/>";
?>



<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index 3</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="public/index3.css">
</head>
<body>
<body>
    <div class="contenedor">
        <nav class="d-flex justify-content-around mb-3">
            <button id="formulario1" class="btn btn-primary">Formulario 1</button>
            <button id="formulario2" class="btn btn-primary">Formulario 2</button>
        </nav>
        <h1>Tres en Línea</h1>
        <div class="tablero">
            <div class="celda" data-pos="1" contenteditable="true"></div>
            <div class="celda" data-pos="2" contenteditable="true"></div>
            <div class="celda" data-pos="3" contenteditable="true"></div>
            <div class="celda" data-pos="4" contenteditable="true"></div>
            <div class="celda" data-pos="5" contenteditable="true"></div>
            <div class="celda" data-pos="6" contenteditable="true"></div>
            <div class="celda" data-pos="7" contenteditable="true"></div>
            <div class="celda" data-pos="8" contenteditable="true"></div>
            <div class="celda" data-pos="9" contenteditable="true"></div>
        </div>
        <div class="botones">
            <button class="btn btn-success me-2" id="jugar">Jugar</button>
            <button class="btn btn-danger" id="reiniciar">Reiniciar</button>
        </div>
        <p id="mensaje" class="mt-3 text-danger fw-bold"></p>
    </div>
</body>
<script src="public/index3.js"></script>
</html>
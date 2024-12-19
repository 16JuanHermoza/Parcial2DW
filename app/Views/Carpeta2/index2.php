<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="public/index2.css">
</head>
<body>
<body>
    <div class="contenedor">
        <h1>Conversor de Moneda</h1>
        <input id="cantidad" type="number" placeholder="Ingresa la cantidad" class="form-control mb-3">
        
        <select id="moneda1" class="form-select mb-3">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
        <select id="moneda2" class="form-select mb-3">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>

        <button id="convertir" class="btn btn-primary w-100">Convertir</button>
        <p id="resultado"></p>
    </div>
    <script src="public/index2.js"></script>
</body>
</html>
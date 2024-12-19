document.getElementById("convertir").addEventListener("click", function () {
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const moneda1 = document.getElementById("moneda1").value;
    const moneda2 = document.getElementById("moneda2").value;
    const cambio = {
        "USD_EUR": 0.96,
        "EUR_USD": 1.03
    };

    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").textContent = "Ingresar un valor positivo";
        return;
    }

    if (moneda1 === moneda2) {
        document.getElementById("resultado").textContent = "No se puede convertir la misma moneda";
        return;
    }

    const clave = `${moneda1}_${moneda2}`;
    const resultado = (cantidad * cambio[clave]).toFixed(2);

    if (resultado >= 500) {
        window.location.href = "http://localhost/Parcial2DW/Index3-CResultF1";
    } else {
        document.getElementById("resultado").textContent = `${cantidad} ${moneda1} = ${resultado} ${moneda2}`;
    }
});
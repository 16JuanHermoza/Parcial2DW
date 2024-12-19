// Botones de redireccionamiento
var formulario1 = document.getElementById("formulario1");
formulario1.onclick = function () {
    window.location.href = 'http://localhost/Parcial2DW/Index1-CVistaF1';
};

var formulario2 = document.getElementById("formulario2");
formulario2.onclick = function () {
    window.location.href = 'http://localhost/Parcial2DW/Index2-CFormF1';
};

const celdas = document.querySelectorAll(".celda");
const mensaje = document.getElementById("mensaje");

function JUEGO() {
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    for (const combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (
            celdas[a].textContent.trim() &&
            celdas[a].textContent.trim() === celdas[b].textContent.trim() &&
            celdas[a].textContent.trim() === celdas[c].textContent.trim()
        ) {
            const ganador = celdas[a].textContent.trim();
            if (ganador.toLowerCase() === "x") {
                mensaje.textContent = "Has ganado";
            } else if (ganador === "O") {
                mensaje.textContent = "Has perdido";
            }
            return true;
        }
    }
    return false;
}

// Lógica para que la computadora coloque "O" de forma aleatoria
function colocarCirculoAleatorio() {
    const vacias = Array.from(celdas).filter(c => !c.textContent.trim());
    if (vacias.length > 0) {
        const aleatoria = vacias[Math.floor(Math.random() * vacias.length)];
        aleatoria.textContent = "O";
        aleatoria.setAttribute("contenteditable", "false");
    }
}

// Botón Jugar
document.getElementById("jugar").addEventListener("click", () => {
    let xColocada = false;

    // Validar si el jugador colocó una "X" (mayúscula o minúscula)
    celdas.forEach(celda => {
        if (celda.textContent.trim().toLowerCase() === "x") {
            xColocada = true;
            celda.setAttribute("contenteditable", "false");
        }
    });

    if (!xColocada) {
        mensaje.textContent = "coloca la x o X para jugar";
        return;
    }

    mensaje.textContent = "";

    // Verificar si ya hay un ganador
    if (JUEGO()) return;

    // La computadora coloca "O" y verifica si hay ganador
    colocarCirculoAleatorio();
    JUEGO();
});

// Botón Reiniciar
document.getElementById("reiniciar").addEventListener("click", () => {
    celdas.forEach(celda => {
        celda.textContent = "";
        celda.setAttribute("contenteditable", "true");
    });
    mensaje.textContent = "";
});

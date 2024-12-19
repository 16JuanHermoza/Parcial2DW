let counter = 0;

const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const counterDisplay = document.getElementById("counter");

decrementBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    counterDisplay.textContent = counter;
  }
});

incrementBtn.addEventListener("click", () => {
  if (counter < 20) {
    counter++;
    counterDisplay.textContent = counter;

    if (counter === 20) {
      window.location.href = "http://localhost/Parcial2DW/Index2-CFormF1";
    }
  }
});
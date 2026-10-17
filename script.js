let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);

    // result flash animation
    display.style.background = "#003333";
    setTimeout(() => {
      display.style.background = "#000";
    }, 200);

  } catch {
    display.value = "Error";
  }
}
const textElement = document.getElementById("rotating-icon");
const textValues = ["shopping_cart", "payments", "attach_money", "sell"];
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % textValues.length;
    textElement.textContent = textValues[currentIndex];
}, 150);
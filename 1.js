
const num = Number.parseFloat(prompt("Введите температуру в градусах Цельсия:"));
lenTemp(num);

function lenTemp(num) {
    alert(`Цельсий: ${num}, Фаренгейт: ${((9 / 5) * num + 32).toFixed(1)}.`);
}
var modal = document.getElementById("myModal");

// Получаем элемент, который открывает модальное окно
var btn = document.getElementById("myBtn");

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Функция для открытия модального окна
btn.onclick = function() {
    modal.style.display = "block";
}

// Функция для закрытия модального окна
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь нажимает в любом месте за пределами модального окна,
// закрываем модальное окно
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// script.js
document.getElementById('accept-btn').addEventListener('click', function() {
    var selectedPositions = Array.from(document.getElementsByName('position'))
        .filter(input => input.checked)
        .map(input => input.value);
    console.log(selectedPositions); // Здесь вы можете обработать выбранные позиции
});

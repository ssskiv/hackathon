var basket = 1;

//Онклик на всю страницу
document.addEventListener("click", function(event) {
    // Нужный код
    console.log("Клик на странице");
  });


  //Изменяем переменную
  let selectedValue = 0; // начальное значение переменной
const selectedValueElement = document.getElementById("selectedValue"); // получаем элемент, в котором будем отображать значение переменной

function changeValue(value) { // функция для изменения значения переменной
  selectedValue = value; // присваиваем переменной новое значение
  selectedValueElement.textContent = selectedValue; // обновляем значение на странице
}

function telnumb() {
    var input = prompt("Введите свой номер телефона")
    if (input != null) {
        alert("Вы написали:" +input);
    }
}
//Объявление переменных//
var basket = 0;
var salat_price1 = 450;
var salat_price2 = 250;
var pizza_price1 = 550;
var pizza_price2 = 450;
var pizza_price3 =  600;
var pasta_price = 300;
var water_price1 = 100;
var water_price2 = 150;
var water_price3 = 200;



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

let count = 0; // определяем переменную count

        function increment() {
  count++; // увеличиваем значение переменной count на 1
  document.getElementById("result").innerHTML = count; // выводим значение переменной count на страницу в элемент <p> с id="result"
}


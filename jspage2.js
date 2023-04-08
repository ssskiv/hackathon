//Объявление переменных//
var basket = 0 + "р.";
var salat_price1 = 400 + "р.";
var salat_price2 = 250 + "р.";
var pizza_price1 = 550 + "р.";
var pizza_price2 = 450 + "р.";
var pizza_price3 =  600 + "р.";
var pasta_price = 300 + "р.";
var water_price1 = 100 + "р.";
var water_price2 = 150 + "р.";
var water_price3 = 200 + "р.";



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
let cart = {
    //надо будет менять
    'dafasf' : {
        "name" : "blabla",
        "count" : 3,
    },
    'sndi' : {
        "name" : "blabla",
        "count" : 3,
    }
}

document.onclick = event => {
    if(event.target.classlust.contains('plus')) {
        plusFunction(event.target.dataset.id)
    }
    if(event.target.classlust.contains('minus')) {
        minusFunction(event.target.dataset.id)
    }

}
// увеличение количества товара
const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
}
// уменьшение количества товара
const minusFunction = id => {
    if (cart[id]['count']-1 ==0) {
        deletFunction(id);
        return true;
    }
    cart[id]['count']--;
    renderCart();
}
// удаление товара
const deletFunction = id => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}

renderCart();
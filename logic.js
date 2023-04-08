let cart = {
    'dafasf' : 2
    'dffyu' : 2

}

document.onclick = event => {
    console.log(event.target.classlust)
    if(event.target.classlust.contains('plus')) {
        plusFunction(event.target.dataset.id)
    }

}
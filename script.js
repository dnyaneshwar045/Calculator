const element = document.getElementsByTagName('li');
const screen = document.querySelector('p');
const clear = document.getElementById('clear');

for (let i = 0; i < element.length; i++) {
    if (element[i].innerHTML === '=') {
        element[i].addEventListener("click", calculate());
    } else {
        element[i].addEventListener("click", addTocurrentValue(i));
    }
}

function addTocurrentValue(i) {
    return function () {
        if (element[i].innerHTML === "X") {
            screen.innerHTML += '*';
        } else {
            screen.innerHTML += element[i].innerHTML;
        }
    }
}

function calculate(i) {
    return function () {
        screen.innerHTML = eval(screen.innerHTML);
    }
}

clear.onclick = function () {
    screen.innerHTML = " ";
}
const divs = document.querySelectorAll('.block')

let num_1 = +prompt("Pleace write 1 number")
let num_2 = +prompt("Pleace write 2 number")

let element = divs[num_1]

let elements = divs[num_2]

let bottoms = 150;
let leftse = 617;
let topse = 266;

setTimeout(() => {
    element.style.setProperty('bottom', `${bottoms}px`);
    element.style.setProperty('left', `${leftse}px`)
    element.style.setProperty('top', `${topse}px`)
}, 1000)


let tops = 150;
let lefts = 515;


setInterval(() => {
    elements.style.setProperty('top', `${tops}px`);
    elements.style.setProperty('left', `${lefts}px`)
    elements.style.setProperty('top', `${topse}px`)
}, 1000)
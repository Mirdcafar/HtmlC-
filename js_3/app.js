const adding_div = document.querySelector('.color_box');
const colors = ['red', 'black', 'green', 'yellow'];
const score = document.querySelector('.span')
let countz = 0;

function AddColorDiv() {
    let randomTop = Math.floor(Math.random() * 500);
    let randomLeft = Math.floor(Math.random() * 500);
    let randomColor = Math.floor(Math.random() * colors.length);

    const newDiv = document.createElement('div');
    newDiv.className = 'div';
    newDiv.style.top = `${randomTop}px`;
    newDiv.style.left = `${randomLeft}px`;
    newDiv.style.backgroundColor = colors[randomColor];
    
    adding_div.appendChild(newDiv);
}

setInterval(() => {
    AddColorDiv();
}, 1000);

adding_div.addEventListener("click", (event) => {
    if (event.target.classList.contains('div')) {
        event.target.remove();
        countz += 1;
        score.innerHTML = `${countz}`
    }
});


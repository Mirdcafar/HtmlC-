let menu = document.querySelector('#contextMenu');
let folder = document.querySelector('#folder')
let image = document.querySelector('#image')
let list = document.querySelector('#list')

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    
    let box = document.querySelector('.box');
    menu.style.display = 'block';
    box.style.display = 'block';

    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let menuHeight = menu.offsetHeight;
    let menuWidth = menu.offsetWidth;

    if (event.clientY + menuHeight > windowHeight) {
        menu.style.top = (windowHeight - menuHeight) + 'px';
    } else {
        menu.style.top = event.clientY + 'px';
    }

    if (event.clientX + menuWidth > windowWidth) {
        menu.style.left = (windowWidth - menuWidth) + 'px';
    } else {
        menu.style.left = event.clientX + 'px';
    }
});

document.querySelector('.box').addEventListener('click', function(event) {
    event.currentTarget.style.display = 'none';
    menu.style.display = 'none';
});



folder.addEventListener('click',function(){
    let item = document.createElement('div');
    let nameFolder = prompt('Write folder name:')
    item.innerHTML += `<p>${nameFolder}</p>`;
    list.append(item);

});
image.addEventListener('click',function(){
    let item = document.createElement('div');
    let Url = prompt('Write img url:')
    item.innerHTML += `<img src="${Url}" alt="">`;
    list.append(item);

});

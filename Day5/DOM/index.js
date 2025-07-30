const body = document.body

const heading = document.getElementById('heading');
heading.innerHTML = 'DOM Manipulation'
heading.style.textAlign = 'center'
heading.style.backgroundColor = 'green'
heading.style.color = 'white'


const shape = document.querySelector('.shape')
const btn = document.querySelector('button')

let isClicked = true;

btn.addEventListener('click', function() {
    if(!isClicked){
        shape.style.backgroundColor = 'yellow'
        isClicked = true
        btn.innerHTML = 'OFF'
    }else{
        shape.style.backgroundColor = 'white'
        isClicked = false
        btn.innerHTML = 'ON'
    }
})

const modal = document.querySelector('#myModal')

window.addEventListener('load', function(){
    modal.style.display = 'flex'
})
const close = document.getElementById('closeModal')
close.addEventListener('click', function() {
    modal.style.display = 'none'
})
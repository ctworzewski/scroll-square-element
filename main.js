
const squere = document.createElement('div');
document.body.appendChild(squere);

let grow = true;
let size = 100;

squere.style.width = size + 'px';
squere.style.height = size + 'px';

function element() {
    squere.style.width = size + 100 + 'px';
    squere.style.height = size + 100 + 'px';
}

window.addEventListener('scroll', function () {
    if (grow == true) {
        size += 5;
        element()
    }
    else {
        size -= 5;
        element()
    }

    if (size >= window.innerWidth * 0.5) {
        grow = false;
    }
    else if (size == 0) {
        squere.style.backgroundColor = 'green';
        grow = true;
    }

    // if (size >= window.innerWidth * 0.5) {
    //     grow = false;
    // }
    // else if (size <= 0) {
    //     grow = true;
    // }
});

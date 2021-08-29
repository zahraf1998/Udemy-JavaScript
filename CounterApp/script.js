
const count = document . querySelector('.count');
const buttons = document . querySelector('.buttons');

buttons.addEventListener('click' , (e) => {
    if (e.target.classList.contains('add')) {
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        setColor();
    }
    if (e.target.classList.contains('subtract')) {
        count.innerHTML--;
        setColor();
    }
});

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "#27745f";
    }
    else if (count.innerHTML < 0) {
        count.style.color = "#832c2c";
    }
    else {
        count.style.color = "";
    }
}

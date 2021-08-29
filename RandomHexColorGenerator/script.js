const button = document.querySelector('.button');
const color = document.querySelector('.color');

const generateColor = () => {
    const hexColor = '#'+ Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
    color.style.borderColor = hexColor;
};

button.addEventListener('click', generateColor);

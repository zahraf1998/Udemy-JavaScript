const btn = document.querySelector('button'),
input = document.querySelector('input');

const copy = (e) => {
    e.preventDefault();

    input.select();
    input.setSelectionRange(0, 999999);
    document.execCommand('copy');
    
    btn.textContent = 'Copied!'
    setTimeout(() => btn.textContent = 'Copy',
    3000)
};

btn.addEventListener('click', copy);


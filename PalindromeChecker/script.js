const btn = document.querySelector('.btn'),
result = document.querySelector('.result');

btn.addEventListener('click', checkPal);

function checkPal() {
    let flag = true
    const word = document.querySelector('input').value.toLowerCase();
    let len = word.length;
        for (i = 0 ; i <= (len/2); i++){
            if (word[i] === word[len-1-i]) continue;
            else {
                result.innerHTML = `${word.toUpperCase()} is NOT a palindrome!`;
                flag = false;
                return;
            }
        }
        if (flag && word) result.innerHTML = `${word.toUpperCase()} is a palindrome!`;
};
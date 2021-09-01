const btn = document.querySelector('.btn'),
result = document.querySelector('.result'),
vowel = ['a','e','o','i','u'];

btn.addEventListener('click', countVowel);

function countVowel() {
    let count = 0;
    const word = document.querySelector('input').value.toLowerCase();
        for (i = 0 ; i < word.length; i++){
            if (vowel.includes(word[i])) count++;
        }
        result.innerHTML = `${word.toUpperCase()} has ${count} vowel(s)!`;
};
const image = document.getElementById('image');
const statusDisplay = document.getElementById('status');

setInterval( () => {
    fetch('https://upload.wikimedia.org/wikipedia/commons/c/c6/500_x_500_SMPTE_Color_Bars.png?time='
         + (new Date()).getTime())
         .then(() => {
             image.src = './images/online.png';
             statusDisplay.textContent = "You're ONLINE!!! Connection looks good.";
             document.body.style.backgroundColor = 'rgb(153, 253, 170)';
             console.log('okk')
           })  
         .catch(() => {
            statusDisplay.textContent = 'OOPS!!! Your Internet Connection is Down.';
            image.src = './images/offline.png';
            document.body.style.backgroundColor = 'rgb(252, 142, 147)';
         })    
}, 1000);
const glink = document.getElementById('glink'),
btn = document.getElementById('btn'),
downloadLink = document.getElementById('text1'),
copy = document.querySelectorAll('.copy'),
embedAudio = document.getElementById('text2'),
embedVideo = document.getElementById('text3'),
clear = document.querySelector('.clear');

btn.addEventListener('click', generate);

function generate() {
    const link = glink.value;
    const confirm = link.includes('file/d/');

    if(confirm) {
        const dlink = link.replace('file/d/',
        'uc?export=download&id=')
        .replace('/view?usp=sharing','');
        downloadLink.value = dlink;

        const audioPart1 = '<audio width="300" height="32" controls="controls" src="';
        const audioPart2 = '" type="audio/mp3"></audio>';
        embedAudio.value = `${audioPart1}${dlink}${audioPart2}`;

        const videoLink = link.replace("/view?usp=sharing", "");
        const videoPart1 = '<iframe src="';
        const videoPart2 = '/preview" width="560" height="315"></iframe>';
        embedVideo.value = `${videoPart1}${videoLink}${videoPart2}`
    } else alert('Please enter a Google Drive  File Link')
};

copy.forEach(element => element.addEventListener('click', copyLink));
    
function copyLink(e) {
    const textArea = e.target.parentElement.children[0];
    textArea.select();
    document.execCommand('copy');

    e.target.innerHTML = 'Copied!';

    setTimeout (() => e.target.innerHTML = 'Copy' , 3000);
};

clear.addEventListener('click', clearForm);

function clearForm() {

    downloadLink.value = '';
    embedAudio.value = '';
    embedVideo.value = '';
    glink.value = '';
};
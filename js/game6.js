



const btn = document.getElementById('btnGame6');
const btnStart = document.getElementById('StartToPlayGame6');
const miniGameEl = document.getElementById('mini-games');

btnStart.addEventListener('click', () => {
    btnStart.style.display = 'none';
    btn.style.display = 'block';
});



function getRandomColorRGB () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

console.log(getRandomColorRGB());
btn.addEventListener('click', function onClick(event) {
miniGameEl.style.backgroundColor=getRandomColorRGB ();
});





const cuteColors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#fffffc'];
const cuteCard = document.querySelector('.card');

function changeColor() {
    const cuteRandomColor = cuteColors[Math.floor(Math.random() * cuteColors.length)];
    cuteCard.style.backgroundColor = cuteRandomColor;
}

let points:number = 0;

const image = document.getElementById('image')
const counter = document.getElementById('counter');

const checkThePointsAtTheEntrance = () => {
    let hasPoints = localStorage.getItem('_points');
    if(hasPoints) { 
        points = Number(hasPoints)
        counter.innerHTML = `Количество умерших клеток: ${points.toString()}`; 
    }
}
window.onload = checkThePointsAtTheEntrance;



const addPoints = () => {
    points++;
    localStorage.setItem('_points', JSON.stringify(points))
    counter.innerHTML =  `Количество умерших клеток: ${points.toString()}`;
}

image.addEventListener('click', addPoints);
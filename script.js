 

function addDivs() {
    for (let i = 0; i < 256; i++) {
        let littleDiv = document.createElement('div');
        littleDiv.setAttribute("class", "littleDiv");
        littleDiv.addEventListener("mouseenter", event => event.target.style.backgroundColor = "black")
        document.getElementById('container').appendChild(littleDiv);
    }
}


function newGrid() {
    let input = prompt("What width you want?");
    let size = parseInt(input);
    document.getElementById('container').innerHTML = "";
    let divTotal = size * size
    for (let i = 0; i < divTotal; i++) {
        let littleDiv = document.createElement('div');
        littleDiv.setAttribute("class", "littleDiv");
        littleDiv.addEventListener("mouseenter", event => event.target.style.backgroundColor = "black")
        document.getElementById('container').appendChild(littleDiv);
    }
    document.getElementById('container').style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    document.getElementById('container').style.gridTemplateRows = 'repeat(' + size + ', 1fr)';
}


addDivs();
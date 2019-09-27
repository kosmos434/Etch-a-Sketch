 

function addDivs() {
    for (let i = 0; i < 256; i++) {
        let littleDiv = document.createElement('div');
        littleDiv.setAttribute("class", "littleDiv");
        littleDiv.addEventListener("mouseenter", event => event.target.style.backgroundColor = "black")
        document.getElementById('container').appendChild(littleDiv);
    }
}




addDivs();
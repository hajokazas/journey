function showImages(type){
    if(type == "ship"){
        document.getElementById("ships").style.display = "block"
        document.getElementById("anchors").style.display = "none"
    }
    if(type == "anchor"){
        document.getElementById("ships").style.display = "none"
        document.getElementById("anchors").style.display = "block"
    }
}

let shipNumber = 0
function updateSelectedShip(line, id) {
    const isSelected = line.classList.contains("imgSelected");
    
    document.querySelectorAll('.imgShip')
        .forEach(ship => ship.classList.remove('imgSelected'));

    if (!isSelected) {
        line.classList.add("imgSelected");
        shipNumber = id;
    } else {
        shipNumber = null; // nothing selected
    }

    console.log(shipNumber);
}

let anchorNumber = 0
function updateSelectedAnchor(line, id) {
    const isSelected = line.classList.contains("imgSelected");
    
    document.querySelectorAll('.imgAnchor')
        .forEach(ship => ship.classList.remove('imgSelected'));

    if (!isSelected) {
        line.classList.add("imgSelected");
        anchorNumber = id;
    } else {
        anchorNumber = null; // nothing selected
    }

    console.log(anchorNumber);
}

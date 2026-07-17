const parent = document.getElementById("parent");

function susumu() {
    parent.classList.add("susumu");
    parent.addEventListener("animationend",susunda,{once:true});
}


function susunda() {
    parent.appendChild(parent.children[0]);
    parent.classList.remove("susumu");
}

function modoru() {
    parent.classList.add("modoru");
    parent.insertBefore(parent.children[parent.children.length-1],parent.children[0]);
    parent.addEventListener("animationend",modotta,{once:true});
}


function modotta() {
    parent.classList.remove("modoru");
}
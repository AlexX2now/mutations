function hoverOffImg(name){
switch (name){
    case "rhino skin":
        document.querySelector('.first').classList.add("visible");
    break;
    case "extra feet":
        document.querySelector('.second').classList.add("visible");
    break;
    case "hammerhead":
        document.querySelector('.third').classList.add("visible");
    break;
    case "impact":
        document.querySelector('.four').classList.add("visible");
    break;
}
}


function closeall(){
    document.querySelector('.first').classList.remove("visible");
    document.querySelector('.second').classList.remove("visible");
    document.querySelector('.third').classList.remove("visible");
    document.querySelector('.four').classList.remove("visible");
}
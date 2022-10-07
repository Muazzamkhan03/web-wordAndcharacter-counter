function count(){
    const words = document.querySelector("#words");
    const charWithSpaces = document.querySelector("#charwithspace");
    const charWithoutSpaces = document.querySelector("#charwithoutspace");
    const sentences = document.querySelector("#sentences");
    
}

function clear(){
    const textArea = document.querySelector("#text");
    textArea.value = "";
}

document.querySelector("#count").addEventListener("click",count);
document.querySelector("#clear").addEventListener("click",clear);
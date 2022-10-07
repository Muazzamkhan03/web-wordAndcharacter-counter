function count(){
    console.log("count is clicked");
}

function clear(){
    const textArea = document.querySelector("#text");
    textArea.value = "";
}

document.querySelector("#count").addEventListener("click",count);
document.querySelector("#clear").addEventListener("click",clear);
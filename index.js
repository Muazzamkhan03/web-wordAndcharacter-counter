function count(){
    console.log("count is clicked");
}

function clear(){
    console.log("clear is clicked");
}

document.querySelector("#count").addEventListener("click",count);
document.querySelector("#clear").addEventListener("click",clear);
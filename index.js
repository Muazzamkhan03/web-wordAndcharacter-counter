function count(){
    const words = document.querySelector("#words");
    const charWithSpaces = document.querySelector("#charwithspace");
    const charWithoutSpaces = document.querySelector("#charwithoutspace");
    const sentences = document.querySelector("#sentences");
    const textArea = document.querySelector("#text");

    const text = textArea.value;

    let wordCount = 0;
    let charWithSpacesCount = 0;
    let charWithoutSpacesCount = 0;
    let sentencesCount = 0;

    for(let i=0; i<text.length; i++){
        if(text[i] != ' '){
            charWithoutSpacesCount++;
        }
        charWithSpacesCount++;
    }

    console.log(charWithSpacesCount, charWithoutSpacesCount);
}

function clear(){
    const textArea = document.querySelector("#text");
    textArea.value = "";
}

document.querySelector("#count").addEventListener("click",count);
document.querySelector("#clear").addEventListener("click",clear);
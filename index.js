function count(){
    const words = document.querySelector("#words");
    const charWithSpaces = document.querySelector("#charwithspace");
    const charWithoutSpaces = document.querySelector("#charwithoutspace");
    const sentences = document.querySelector("#sentences");
    const textArea = document.querySelector("#text");

    const text = textArea.value;
    
    let wordCount = text.split(" ").length;
    let charWithSpacesCount = 0;
    let charWithoutSpacesCount = 0;
    let sentencesCount = text.split(".").length;

    for(let i=0; i<text.length; i++){
        if(text[i] != ' '){
            charWithoutSpacesCount++;
        }
        charWithSpacesCount++;
    }

    words.innerHTML = wordCount;
    charWithSpaces.innerHTML = charWithSpacesCount;
    charWithoutSpaces.innerHTML = charWithoutSpacesCount;
    sentences.innerHTML = sentencesCount;
}

function clear(){
    const textArea = document.querySelector("#text");
    const words = document.querySelector("#words");
    const charWithSpaces = document.querySelector("#charwithspace");
    const charWithoutSpaces = document.querySelector("#charwithoutspace");
    const sentences = document.querySelector("#sentences");

    textArea.value = "";
    words.innerHTML = 0;
    charWithSpaces.innerHTML = 0;
    charWithoutSpaces.innerHTML = 0;
    sentences.innerHTML = 0;
}

document.querySelector("#count").addEventListener("click",count);
document.querySelector("#clear").addEventListener("click",clear);
/*DOM */

const textarea = document.querySelector(".textarea");
const ctrWords = document.getElementById("counter__words");
const ctrCharacters = document.getElementById("counter__characters");
const character = document.getElementById("character");

const ctrCharactersNoSpace = document.getElementById("counter__characters__ns");
const characterNS = document.getElementById("characterNS");

const ctrParagraphs = document.getElementById("counter__paragraphs");
const paragraph = document.getElementById("paragraph")

const ctrSentences = document.getElementById("counter__sentences");
const sentence = document.getElementById("sentence");

const reset = document.querySelector(".reset");


/*Variables*/
let text;


textarea.addEventListener("input", (e) => {

    text = e.target.value.trim();
    
    countWords();
    countCha();
    countChaNS();
    countParagraph();
    countSentences();

    enabledReset();
    discount();
    clean();
 
})


/* 
CONTADORES
----------------------*/

/* Contador de palabras */

const countWords = () => {

    const words = text.split(/[\n ]/g,);
    ctrWords.textContent = words.length;
    (words.length === 1) ? word.textContent = "Palabra" : word.textContent= "Palabras"; 
}


 /* Contador de caracteres (con espacios) */

 const countCha = () => {

    let count = 0;

    for (let key of text){
        count ++;
        ctrCharacters.textContent = count;

        (count === 1) ? character.textContent = "Carácter" : character.textContent = "Caracteres";
    }
}



 // Contador de caracteres (sin espacios)
    
 const countChaNS = () => {

    const charactersNoSpaces = text.replace(/ /g, "");
    let count = 0;

    for (let key of charactersNoSpaces){
        count ++;
        ctrCharactersNoSpace.textContent = count;

        (count === 1) ? characterNS.textContent = "Carácter" : characterNS.textContent = "Caracteres";
        
    }
}


// Contador de párrafos

const countParagraph = () => {

    const paragraphs = text.split(/\n[^\n]/g,).length;
    ctrParagraphs.textContent = paragraphs;

    (paragraphs === 1) ? paragraph.textContent ="Párrafo" :  paragraph.textContent = "Párrafos"
    
}


/* Contador de oraciones */

const countSentences = () => {

    const sentences = text.split(/[…?!.]+\s*[A-Z0-9ÁÉÍÓÚÑ¿¡.—-…"«]/g,).length;
    ctrSentences.textContent = sentences;
    
    (sentences === 1) ? sentence.textContent = "Oración" : sentence.textContent = "Oraciones";
    
}




/* 
RESET
------------- */

/* Deshabilitar reset */
const disabledReset = () => {
    reset.disabled = true;
}

/* Habilitar reset */
const enabledReset = () => {
    reset.disabled = false;
    clean();
}



/* Updated */
const discount = () => {
    if(text === ""){
        ctrWords.textContent = 0;
        ctrCharacters.textContent = 0;
        ctrCharactersNoSpace.textContent = 0;
        ctrParagraphs.textContent = 0;
        ctrSentences.textContent = 0;

        disabledReset();
    }
  };


  /* Clean*/
const clean = () => {

    if (enabledReset){

        reset.addEventListener("click", () => {
            
            text = "";
            textarea.value = text;

            discount();
            disabledReset();
        })
    }
}
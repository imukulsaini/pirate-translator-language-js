//reference html to javascript

const inputText = document.querySelector(".textInput");
const outputText = document.querySelector(".textOutput");
const translatedButton = document.querySelector("#translateButton");

const serverUrl = "https://api.funtranslations.com/translate/pirate.json"

function urlHandler (text){

return serverUrl +"?" + "text=" + text;

}


//processing

function fetchHandler(){

const translateInput = inputText.value;

fetch(urlHandler(translateInput)).then(response => response.json ()).then( 
    json =>
    { 
        console.log(json)
         const translateOutput = json.contents.translated;
         console.log("outputText = " + translateOutput)
         //output
         outputText.innerText = translateOutput; 
     }

    )

}


translatedButton.addEventListener("click" , fetchHandler);

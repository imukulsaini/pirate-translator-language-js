//reference html to javascript

var inputText = document.querySelector(".textInput");
var outputText = document.querySelector(".textOutput");
var translatedButton = document.querySelector("#translateButton");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json"

function urlHandler (text){

return serverUrl +"?" + "text=" + text;

}


//processing

function fetchHandler(){

var translateInput = inputText.value;
console.log("transleate input =  "+ translateInput)

fetch(urlHandler(translateInput)).then(response => response.json ()).then( 
    json =>
    { 
        console.log(json)
         var translateOutput = json.contents.translated;
         console.log("outputText = " + translateOutput)
         //output
         outputText.innerText = translateOutput; 
     }

    )

}


translatedButton.addEventListener("click" , fetchHandler);

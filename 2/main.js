
let letters="abcdefghijklmnopqrstuvwxyz"

let lettersArray=Array.from(letters)


let lettersPlace=document.querySelector(".letters")



lettersArray.forEach((letter)=>{

    let span=document.createElement("span")

    let spanText=document.createTextNode(letter)

    span.className="letter-box"

    span.appendChild(spanText)
    lettersPlace.append(span)
})

let words={
    Programming:[
        "Algorithm",
        "Function",
        "Variable",
        "Loop",
        "Array",
        "Class",
        "Object",
        "Debugging",
        "Compiler",
        "Syntax"
      ],
    Country:[
        "United States",
        "Canada",
        "Germany",
        "India",
        "Australia",
        "Japan",
        "Brazil",
        "France",
        "Mexico",
        "South Africa"
      ],
    Famous:[
        "Isaac Newton",
        "Walt Disney",
        "Elvis Presley",
        "Pablo Picasso",
        "Oprah Winfrey",
        "Mark Twain",
        "Hillary Clinton",
        "Vincent van Gogh",
        "Bruce Lee",
        "Marilyn Monroe"
      ],
      Films:[
        "The Godfather",
        "Citizen Kane",
        "Schindler's List",
        "Pulp Fiction",
        "Forrest Gump",
        "The Shawshank Redemption",
        "Casablanca",
        "Inception",
        "Star Wars",
        "Titanic"
      ]

}

let Allkeys=Object.keys(words)

// categorySelected

let categorySelectedNumber=Math.floor(Math.random()*Allkeys.length)

let categorySelectedName=Allkeys[categorySelectedNumber]

let categoryElement=document.querySelector(".category span");

categoryElement.innerHTML=categorySelectedName



let categorySelectedValue=words[categorySelectedName]



// WordSelected


let WordSelectedNumber=Math.floor(Math.random()*categorySelectedValue.length)

let WordSelected=categorySelectedValue[WordSelectedNumber]

let WordSelectedArray=Array.from(WordSelected)


let lettersGuess=document.querySelector(".letters-guess")

WordSelectedArray.forEach((WordText) => {
  let spanLetter = document.createElement("span");

  if(WordText ===" "){
    spanLetter.className="Has-space"
  }




  lettersGuess.append(spanLetter);

});

let guessLettersSpans=document.querySelectorAll(".letters-guess span")

let wrongAttempts =0

let theDraw=document.querySelector(".hangmandraw")






document.addEventListener("click",(e)=>{

  if(e.target.className==="letter-box"){

    


    





    let theStatus=false;

    e.target.classList.add("clicked")
    
    let theClickedLetter=e.target.innerHTML.toLowerCase()

    let theChosenWord=Array.from(WordSelected.toLowerCase())

    theChosenWord.forEach((letter,index)=>{

      if(theClickedLetter===letter){

         theStatus=true;


        guessLettersSpans.forEach((span,spanIndex)=>{

          if(index===spanIndex)
          {
            span.innerHTML=theClickedLetter
          }

        })



      }

    })
     if(theStatus!==true){
      wrongAttempts++;

      theDraw.classList.add(`wrong-${wrongAttempts}`)
      if(wrongAttempts===8){

        endGame();

        lettersPlace.classList.add("finished")

        
      }
     }

  }



})


let endGame=()=>{
  alert(`You lose, The Word is : ${WordSelected}`)
}


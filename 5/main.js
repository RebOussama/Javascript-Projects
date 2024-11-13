
// Arrays Of Words :

const Allwords=[
    "Test",
    "Playing",
    "Code",
    "Facebook",
    "Youtube",
    "React",
    "Java",
    "Javascript",
    "Typing",
    "Good",
    "Documentation",
    "Programming",
    "Oussama",
    "Working",
    "Tiktok",
    "Snapchat",
    "Instagrame",
    "Hello",
    "Developper",
    "Github",
]
let words=[
    "Test",
    "Playing",
    "Code",
    "Facebook",
    "Youtube",
    "React",
    "Java",
    "Javascript",
    "Typing",
    "Good",
    "Documentation",
    "Programming",
    "Oussama",
    "Working",
    "Tiktok",
    "Snapchat",
    "Instagrame",
    "Hello",
    "Developper",
    "Github",
];
let lvl={
    "Easy" : 6,
    "Normale" : 4,
    "Hard" : 2
}




let LevelSpan=document.querySelector(".lvl");
let SecondsSpan=document.querySelector(".seconds");
let StartButton=document.querySelector(".start");
let RestartButton=document.querySelector(".restart");
let MainWord=document.querySelector(".the_word");
let input=document.querySelector(".input");
let UpcomingWords=document.querySelector(".upcoming_word");
let TimeLeft=document.querySelector(".time span");
let ScoregGot=document.querySelector(".score .got");
let ScoreTotal=document.querySelector(".score .total");
let ResultTest=document.querySelector(".finish");

let LevelChoosed=document.getElementById("Levels")

let defaultLevel= LevelChoosed.value; //Change Level From Here

let defaultSeconds=lvl[defaultLevel];

LevelSpan.innerHTML=defaultLevel;
SecondsSpan.innerHTML=defaultSeconds;

TimeLeft.innerHTML=defaultSeconds;
ScoreTotal.innerHTML=words.length;

LevelChoosed.onchange=function(){
    let defaultLevel= LevelChoosed.value; //Change Level From Here

    let defaultSeconds=lvl[defaultLevel];
    LevelSpan.innerHTML=defaultLevel;
SecondsSpan.innerHTML=defaultSeconds;

TimeLeft.innerHTML=defaultSeconds;
ScoreTotal.innerHTML=words.length;

input.onpaste=function(){
    return false
}

StartButton.onclick=function(){
    


    this.remove();

    input.focus();

    generateWord()

}

function generateWord(){

    let randomWord=words[Math.floor(Math.random() * words.length)]

    let wordIndex=words.indexOf(randomWord);

    words.splice(wordIndex,1)

    MainWord.innerHTML=randomWord;
    UpcomingWords.innerHTML='';

    for(let i=0;i<words.length;i++){
        let word=document.createElement("div")
        word.innerHTML=words[i]
        UpcomingWords.appendChild(word)
    }
   StartPlay();
}
function StartPlay(){
    TimeLeft.innerHTML=defaultSeconds
    input.value=''
let start=setInterval(() => {
    TimeLeft.innerHTML--;

    if(TimeLeft.innerHTML==="0"){
        clearInterval(start);

        if(input.value.toLocaleLowerCase()!==MainWord.innerHTML.toLocaleLowerCase()){
            let div=document.createElement("div");
            div.className="bad";
            div.innerHTML="Game Over"
            ResultTest.appendChild(div)
            RestartButton.style.cssText="display:block;"
            RestartButton.innerHTML="Restart"

        }else{
            ScoregGot.innerHTML++;
            if(words.length>0){
                generateWord();
            }else{
            let div=document.createElement("div");
            div.className="good";
            div.innerHTML="You win!!🎊🎉"
            ResultTest.appendChild(div)

            RestartButton.style.cssText="display:block;"
            RestartButton.innerHTML="Restart"
            }

        }


    }
    
}, 1000);
}

RestartButton.onclick=function (){
    
    reset();
    
    RestartButton.style.cssText="display:none;"

    input.focus();

    generateWord();


}

function reset(){
    words=[];
    ScoregGot.innerHTML="0"
    ResultTest.innerHTML=''
    for(let i=0;i<Allwords.length;i++){
        let word =Allwords[i];
        words.push(word)
        
    }
}

}





input.onpaste=function(){
    return false
}

StartButton.onclick=function(){
    


    this.remove();

    input.focus();

    generateWord()

}

function generateWord(){

    let randomWord=words[Math.floor(Math.random() * words.length)]

    let wordIndex=words.indexOf(randomWord);

    words.splice(wordIndex,1)

    MainWord.innerHTML=randomWord;
    UpcomingWords.innerHTML='';

    for(let i=0;i<words.length;i++){
        let word=document.createElement("div")
        word.innerHTML=words[i]
        UpcomingWords.appendChild(word)
    }
   StartPlay();
}
function StartPlay(){
    TimeLeft.innerHTML=defaultSeconds
    input.value=''
let start=setInterval(() => {
    TimeLeft.innerHTML--;

    if(TimeLeft.innerHTML==="0"){
        clearInterval(start);

        if(input.value.toLocaleLowerCase()!==MainWord.innerHTML.toLocaleLowerCase()){
            let div=document.createElement("div");
            div.className="bad";
            div.innerHTML="Game Over"
            ResultTest.appendChild(div)
            RestartButton.style.cssText="display:block;"
            RestartButton.innerHTML="Restart"

        }else{
            ScoregGot.innerHTML++;
            if(words.length>0){
                generateWord();
            }else{
            let div=document.createElement("div");
            div.className="good";
            div.innerHTML="You win!!🎊🎉"
            ResultTest.appendChild(div)

            RestartButton.style.cssText="display:block;"
            RestartButton.innerHTML="Restart"
            }

        }


    }
    
}, 1000);
}

RestartButton.onclick=function (){
    
    reset();
    
    RestartButton.style.cssText="display:none;"

    input.focus();

    generateWord();


}

function reset(){
    words=[];
    ScoregGot.innerHTML="0"
    ResultTest.innerHTML=''
    for(let i=0;i<Allwords.length;i++){
        let word =Allwords[i];
        words.push(word)
        
    }
}

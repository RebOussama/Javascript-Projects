let spanCount=document.querySelector('.info .count span')
let bullets=document.querySelector('.bullets')
let bulletContainer=document.querySelector('.bullets .spans')

let quizArea=document.querySelector('.quiz-area')

let answersArea=document.querySelector('.answer-area')

let submitButton=document.querySelector('.submit-button')

let resultContainer=document.querySelector('.result')
let countDownContainer=document.querySelector('.countdown')



let currentIndex=0
let rightAnswers=0
let countdownInterval;
function getQuestions(){
    let myRequest=new XMLHttpRequest();

    myRequest.onreadystatechange=function(){
         if(this.readyState ===4 && this.status===200){
            let questionsObject=JSON.parse(this.responseText)
            let questionsCount=questionsObject.length

            createBullets(questionsCount);

            addQuestionAnswers(questionsObject[currentIndex],questionsCount)

            countdown(10,questionsCount)

            submitButton.onclick=()=>{
                let theRightAnswer=questionsObject[currentIndex].right_answer

                currentIndex++;

                checkAnswer(theRightAnswer,questionsCount);

                quizArea.innerHTML=''
                answersArea.innerHTML=''

                addQuestionAnswers(questionsObject[currentIndex],questionsCount)

                handleBullets();

                clearInterval(countdownInterval)
                countdown(10,questionsCount)


                afficheResult(questionsCount)

            }



         }

    }
    myRequest.open("GET","html_questions.json",true)
    myRequest.send()
}

getQuestions()

function createBullets(num){
    spanCount.innerHTML=num

    for(let i=0;i<num;i++){

        let theBullet=document.createElement('span')


        if(i==0){
            theBullet.classList.add('on')

        }

        bulletContainer.appendChild(theBullet)

    }
}

function addQuestionAnswers(obj,count){

    if(currentIndex<count){
        let titleElement=document.createElement('h2')

    let titleValue=document.createTextNode(obj['title'])

    titleElement.appendChild(titleValue)
    quizArea.append(titleElement)

    for(let i=1;i<=4;i++){

        let mainDiv=document.createElement('div')

        mainDiv.className='answer'

        let inputElement=document.createElement('input')

        inputElement.type='radio'
        inputElement.name='question'
        inputElement.id=`answer_${i}`
        inputElement.dataset.answer=obj[`answer_${i}`]
        
        let labelElement=document.createElement('label')
        labelElement.htmlFor=`answer_${i}`

        let labelValue=document.createTextNode(obj[`answer_${i}`])

        labelElement.appendChild(labelValue)

        mainDiv.append(inputElement)
        mainDiv.append(labelElement)

        answersArea.append(mainDiv)





    }
    }
}

function checkAnswer(ranswer,count){
    let answers=document.getElementsByName('question')
    

    let theSelectedAnswer;

    for(let i=0;i<answers.length;i++){
        if(answers[i].checked){
            theSelectedAnswer=answers[i].dataset.answer
        }
    }


    if(theSelectedAnswer==ranswer){
        rightAnswers++
    }

}

function handleBullets(){
    let bulletsSpans=document.querySelectorAll('.bullets .spans span')
    let bulletsSpansArray=Array.from(bulletsSpans) 

    bulletsSpansArray.forEach((span,index)=>{
        if(currentIndex==index){
            span.className='on'
        }

    })
}

function afficheResult(count){
    if(currentIndex==count){
        let ResultText;
        quizArea.remove();
        answersArea.remove();
        submitButton.remove();
        bullets.remove()
        if(rightAnswers>count/2){
            ResultText=`You are Good , you get ${rightAnswers}/${count}`
        }else{
            ResultText=`You are Bad , you get ${rightAnswers}/${count}`

        }
        let ResultElement=document.createTextNode(ResultText)
        resultContainer.appendChild(ResultElement)

    }
}

function countdown(duration,count){
    if(currentIndex<count){
        let minutes,seconds
        countdownInterval=setInterval(()=>{
            minutes=parseInt(duration/60)
            seconds=parseInt(duration%60)
            
            minutes=minutes<10?`0${minutes}`:minutes
            seconds=seconds<10?`0${seconds}`:seconds

            countDownContainer.innerHTML=`${minutes}:${seconds}`

            if(--duration<0)
            {
                clearInterval(countdownInterval)
                submitButton.click()
            }


        },1000)


    }



}
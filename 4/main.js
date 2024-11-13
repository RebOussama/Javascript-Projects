let startButton = document.querySelector('.start-button')
let ContainerButtons = document.querySelector('.control-buttons')
let triesElement=document.querySelector('.tries span')

let scoreElement=document.querySelector('.score span')
let limiteWrongTries=10

let NameElement = document.querySelector('.name span')

startButton.onclick = () => {
    let UserName = prompt("What is your name ?")
    ContainerButtons.remove();
    if (UserName != null && UserName != "") { NameElement.innerHTML = UserName }
    else {
        NameElement.innerHTML = 'Unknown'
    }

}

let blocksContainer = document.querySelector(".memory-game-blocks")

let blocks = Array.from(blocksContainer.children)

let orderRange = Array.from(Array(blocks.length).keys())

shuffle(orderRange)


blocks.forEach((block, index) => {

    block.style.order = orderRange[index]

    block.addEventListener('click',()=>{

        flipblock(block)

    })

})

function shuffle(list) {

    let current = list.length, temp, random;

    while (current > 0) {
        random = Math.floor(Math.random() * current)
        current--;


        temp = list[current]
        list[current] = list[random]
        list[random] = temp


    }

}


function flipblock(selectedBlock){
    selectedBlock.classList.add('is-flipped')

    let AllFlippedBlocks=blocks.filter(flippedblock=>flippedblock.classList.contains('is-flipped'))

    if(AllFlippedBlocks.length==2){

        stopClick()

        checkMatch(AllFlippedBlocks[0],AllFlippedBlocks[1])
    }


}

function stopClick(){
    blocksContainer.classList.add('not-clicking')

    setTimeout(()=>{
    blocksContainer.classList.remove('not-clicking')
    },1000)
}

function checkMatch(firstFlippedBlock,secondFlippedBlock){


    if(firstFlippedBlock.dataset.technology===secondFlippedBlock.dataset.technology){
        scoreElement.innerHTML=parseInt(scoreElement.innerHTML)+1


        firstFlippedBlock.classList.remove('is-flipped')
        secondFlippedBlock.classList.remove('is-flipped')

        firstFlippedBlock.classList.add('has-match')
        secondFlippedBlock.classList.add('has-match')

    }else{
        triesElement.innerHTML=parseInt(triesElement.innerHTML)+1

        setTimeout(()=>{
            firstFlippedBlock.classList.remove('is-flipped')
        secondFlippedBlock.classList.remove('is-flipped')
        },1000)
    }
    test()
}

function test(){
    if(parseInt(triesElement.innerHTML)==limiteWrongTries){
        alert(`You lose , Your Score is : ${scoreElement.innerHTML}`)
        restart();
    }
    let status=true
    blocks.forEach((block)=>{
        if(!block.classList.contains('has-match')){
            status=false
            return;

        }

    })
    if(status==true){
        setTimeout(()=>{
            alert(`You win , Your Score is : ${scoreElement.innerHTML}`)
        restart();
        },1000)

    }
}

function restart(){
    blocks.forEach((block)=>{
        if(block.classList.contains('has-match')){
            block.classList.remove('has-match')

        }

    })
    scoreElement.innerHTML=0
    triesElement.innerHTML=0
}
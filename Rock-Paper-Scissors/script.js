let userChoice = '';
let footer = document.body.querySelector('.footer')
let uchoice = document.body.querySelector('.uchoice')
let cchoice = document.body.querySelector('.cchoice')
let upoint = 0;
let cpoint = 0;



let rock = document.body.querySelector('#rock')
let paper = document.body.querySelector('#paper')
let scissors = document.body.querySelector('#scissors')

function CompChoice(){
     list = ['rock', 'paper', 'scissors']
     let comChoice = Math.floor(Math.random()*3)
     return list[comChoice];
     
}

function playgame(){
    const compChoice = CompChoice();
    uchoice.innerHTML = `${userChoice}`
    cchoice.innerHTML = `${compChoice}`

    if(compChoice === userChoice){
        footer.innerText = "It is a Draw"
        footer.style.backgroundColor = 'orange'

    }
    else if((userChoice==='rock' && compChoice==='scissors' )||(userChoice==='paper' && compChoice==='rock')||(userChoice='scissors' && compChoice==='paper')){
        footer.innerText = 'User Win !'
        footer.style.backgroundColor = 'greenyellow'
        upoint+=1
        document.body.querySelector('.usscore').innerText = upoint
    }
    else{
        footer.innerText = 'Comp Win'
        footer.style.backgroundColor = 'red'
        cpoint+=1
        document.body.querySelector('.compscore').innerText = cpoint
    }
}

function clickHandler(e){
 userChoice = e.target.id;
 playgame();

}




rock.addEventListener('click', clickHandler)
paper.addEventListener('click', clickHandler)
scissors.addEventListener('click', clickHandler)



// legacey variable -- var
// ES6: let , const
console.log("hi")

// window.onload = function() {
//     document.getElementById("marioParty").play();
// }
let points = 0
let goodButtonsLeft = 20
let lives = 5
const red1 = document.getElementById('red1')
const orange1 = document.getElementById('orange1')
const yellow1 = document.getElementById('yellow1')
const green1 = document.getElementById('green1')
const blue1 = document.getElementById('blue1')

const red2 = document.getElementById('red2')
const orange2 = document.getElementById('orange2')
const yellow2 = document.getElementById('yellow2')
const green2 = document.getElementById('green2')
const blue2 = document.getElementById('blue2')

const red3 = document.getElementById('red3')
const orange3 = document.getElementById('orange3')
const yellow3 = document.getElementById('yellow3')
const green3 = document.getElementById('green3')
const blue3 = document.getElementById('blue3')

const red4 = document.getElementById('red4')
const orange4 = document.getElementById('orange4')
const yellow4 = document.getElementById('yellow4')
const green4 = document.getElementById('green4')
const blue4 = document.getElementById('blue4')

const red5 = document.getElementById('red5')
const orange5 = document.getElementById('orange5')
const yellow5 = document.getElementById('yellow5')
const green5 = document.getElementById('green5')
const blue5 = document.getElementById('blue5')

let wow = new Audio('images/wow.mp3');

const reset = document.getElementById('reset')

//console.log(theButton)
let theMain = document.querySelector('main')
let theTxt = document.getElementById('theText')
let result = document.getElementById('result').src
let pointstxt = String(points)


red1.addEventListener('click', changeColor)
orange1.addEventListener('click', changeColor)
yellow1.addEventListener('click', changeColor)
green1.addEventListener('click', changeColor)
blue1.addEventListener('click', changeColor)

red2.addEventListener('click', changeColor)
orange2.addEventListener('click', changeColor)
yellow2.addEventListener('click', changeColor)
green2.addEventListener('click', changeColor)
blue2.addEventListener('click', changeColor)

red3.addEventListener('click', changeColor)
orange3.addEventListener('click', changeColor)
yellow3.addEventListener('click', changeColor)
green3.addEventListener('click', changeColor)
blue3.addEventListener('click', changeColor)

red4.addEventListener('click', changeColor)
orange4.addEventListener('click', changeColor)
yellow4.addEventListener('click', changeColor)
green4.addEventListener('click', changeColor)
blue4.addEventListener('click', changeColor)

red5.addEventListener('click', changeColor)
orange5.addEventListener('click', changeColor)
yellow5.addEventListener('click', changeColor)
green5.addEventListener('click', changeColor)
blue5.addEventListener('click', changeColor)




const bomb = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
console.log(bomb)

function changeColor(){
    console.log("is this working")
    var btn = this.id
    var Wow = new Audio("images/wow.mp3") 
    document.getElementById(btn).disabled = true
    draw = Math.floor(Math.random()*bomb.length)
    if(bomb[draw] == 5 || bomb[draw] == 10 || bomb[draw] == 15 || bomb[draw] == 20 ||bomb[draw] == 25){
        lives--
        theTxt.textContent = "Total Points: "+String(points) + "\n Safe Spaces Remaining: "+String(goodButtonsLeft)+"\n Lives Left: "+String(lives)
    } 
    
    else {
        points++
        goodButtonsLeft--
        theTxt.textContent = "Total Points: "+String(points) + "\n Safe Spaces Remaining: "+String(goodButtonsLeft)+"\n Lives Left: "+String(lives)
    }

    if(lives==0){
        theTxt.textContent = "GAME OVER! Total Points: "+ String(points)

        document.getElementById("result").src = "images/eboom.gif"
        document.getElementById('red1').disabled = true
        document.getElementById('orange1').disabled = true
        document.getElementById('yellow1').disabled = true
        document.getElementById('green1').disabled = true
        document.getElementById('blue1').disabled = true

        document.getElementById('red2').disabled = true
        document.getElementById('orange2').disabled = true
        document.getElementById('yellow2').disabled = true
        document.getElementById('green2').disabled = true
        document.getElementById('blue2').disabled = true

        document.getElementById('red3').disabled = true
        document.getElementById('orange3').disabled = true
        document.getElementById('yellow3').disabled = true
        document.getElementById('green3').disabled = true
        document.getElementById('blue3').disabled = true

        document.getElementById('red4').disabled = true
        document.getElementById('orange4').disabled = true
        document.getElementById('yellow4').disabled = true
        document.getElementById('green4').disabled = true
        document.getElementById('blue4').disabled = true

        document.getElementById('red5').disabled = true
        document.getElementById('orange5').disabled = true
        document.getElementById('yellow5').disabled = true
        document.getElementById('green5').disabled = true
        document.getElementById('blue5').disabled = true

    }

    if(points == 20){
        
        
        if(lives==1){
            theTxt.textContent = "WOW INCREDIBLE! YOU WIN WITH ALL 20 POINTS AND WITH 1 LIFE LEFT! THAT WAS CLOSE!"
        }
        else{
            "WOW INCREDIBLE! YOU WIN WITH ALL 20 POINTS AND WITH "+String(lives)+" LIVE(S) LEFT!"
        }
        
        document.getElementById("result").src = "images/congrats.jpg"
    }


    console.log(draw)
    bomb.splice(draw,1)
    console.log(bomb)
    
    //document.getElementById("myImage").src = "landscape.jpg";
   
   
   // select a random number from the list and that number is removed from the list
   // if say "5" is selected then that button will have the bomb'


    // if button wiith bomb is clicked, then the bomb will explode and the image of the bomb on screen will be replaced with an image of an explosion

    


    // if the 
    // theTxt.textContent = "Phew... Safe!"
    // theTxt.textContent = "BOOM!"
    //theMain.style.backgroundColor = "yellow"
    

}

// document.createElement("p")

// * Intro to Native EcmaScript (JavaScript)
// * they style property object - on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style)

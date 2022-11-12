// legacey variable -- var
// ES6: let , const
console.log("hi")

// window.onload = function() {
//     document.getElementById("marioParty").play();
// }

const red = document.getElementById('red')
const magenta = document.getElementById('magenta')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const white = document.getElementById('white')
//console.log(theButton)
let theMain = document.querySelector('main')
let theTxt = document.getElementById('theText')
let bombPic = document.getElementById('bombPic').src

red.addEventListener('click', changeColor)
magenta.addEventListener('click', changeColor)
yellow.addEventListener('click', changeColor)
green.addEventListener('click', changeColor)
white.addEventListener('click', changeColor)



const bomb = [1,2,3,4,5]
console.log(bomb)

function changeColor(){
    console.log("is this working")
    var btn = this.id
    document.getElementById(btn).disabled = true
    draw = Math.floor(Math.random()*bomb.length)
    if(bomb[draw] == 5){
        theTxt.textContent = "BOOM!"
        document.getElementById("bombPic").src = "images/Explosion.jpg"
        document.getElementById('red').disabled = true
        document.getElementById('magenta').disabled = true
        document.getElementById('yellow').disabled = true
        document.getElementById('green').disabled = true
        document.getElementById('white').disabled = true
    } else {
        theTxt.textContent = "Phew... Safe!"
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

//##### Assignment for Thursday:
// * Read: [w3 - what is the DOM?](https://www.w3.org/TR/DOM-Level-1/introduction.html)
// * Read: [How to Apply CSS Styles to Page Elements Using JS](https://medium.com/javascript-in-plain-english/how-to-apply-css-styles-to-page-elements-using-javascript-e6d4a22a40de)
// * Work on your button code and come to class on Thursday prepared to continue working with your partner on your assignments
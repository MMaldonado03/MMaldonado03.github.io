// legacey variable -- var
// ES6: let , const
console.log("hi")

const theButton = document.querySelector('button')
console.log(theButton)
let theMain = document.querySelector('main')
let theTxt = document.getElementById('theText')

theButton.addEventListener('click', changeColor)

const bomb = [1,2,3,4,5]
console.log(bomb)

function changeColor(){
    console.log("is this working")
    draw = Math.floor(Math.random()*bomb.length)
    if(bomb[draw] == 5){
        theTxt.textContent = "BOOM!"
    } else {
        theTxt.textContent = "Phew... Safe!"
    }
    console.log(draw)
    bomb.splice(draw,1)
    console.log(bomb)
    
   
   
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
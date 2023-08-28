var number1 = Math.floor(Math.random()*6)+1;
var randomimage1 = "dice" + number1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomimage1);

var number2 = Math.floor(Math.random()*6)+1;
var randomimage2 = "dice" + number2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

var number3 = Math.floor(Math.random()*6)+1;
var randomimage3 = "dice" + number3 + ".png";

document.querySelectorAll("img")[2].setAttribute("src",randomimage3);

if(randomimage1>randomimage2 && randomimage1>randomimage3){
    document.querySelector("h1").innerHTML = "Player 1 Wins";

}
    else if (randomimage2 > randomimage1 && randomimage2 > randomimage3){
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    
    }
    else if (randomimage3 > randomimage1 && randomimage3 > randomimage2){
        document.querySelector("h1").innerHTML = "Player 3 Wins";
    }
        else{
            document.querySelector("h1").innerHTML = "tie"
    }

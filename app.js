/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
---------------------------------------------------*/



/* Label(int) that starts on player1*/
var playerNumber =1;

/* Saves the default value of "New Game" Button*/
var newGameBTN=document.getElementById("newGameBTN").innerHTML

/* Resets values of current round score*/
document.getElementById("current-0").innerHTML=0
document.getElementById("current-1").innerHTML=0

/* Produces Random Number (1-6)*/
function getRandom(){
    return Math.floor((Math.random() * 6) +1)*1;
}


/*
-If score limit is reached a new game is started
else:
- switch() to differentiate between players
- Switches players when dice rolls 1
- else: Adds dice roll to current round score
*/
function currentScoreAdd(){
    if((document.getElementById("score-0").innerHTML>=100)||(document.getElementById("score-1").innerHTML>=100)){
        newGame()
    }
    switch(playerNumber){
        case 1:
            DiceRoll = getRandom()
            dicePicChange(DiceRoll)

            if(DiceRoll ==1){
                losePlayerSwitch()
                activePlayer2()
                break;
            }
            else{
                document.getElementById("current-0").innerHTML=
                (document.getElementById("current-0").innerHTML*1) + DiceRoll;
                break;
            }

            case 2:
                DiceRoll=getRandom()
                dicePicChange(DiceRoll)

            if(DiceRoll==1){
                losePlayerSwitch()
                activePlayer1()
                break;
            }
            else{
               document.getElementById("current-1").innerHTML=
               (document.getElementById("current-1").innerHTML*1) + DiceRoll;
               break;
            }
        }
}
    

/*
- Adds current round score to total score on "Hold" click
- switch() to differentiate between players
- prints winning player when score limit is reached
*/
function holdPlayerSwitch(){

    switch(playerNumber){
        case 1:

            document.getElementById("score-0").innerHTML =
                (document.getElementById("score-0").innerHTML*1)+ (document.getElementById("current-0").innerHTML*1)
            document.getElementById("current-0").innerHTML = 0;

            if(document.getElementById("score-0").innerHTML>=100){
                document.getElementById("newGameBTN").innerHTML=  newGameBTN + '\n' + 'Player 1 Wins!' 
            }

            playerNumber=2;
            activePlayer2()
            break;

        case 2:

            document.getElementById("score-1").innerHTML =
                (document.getElementById("score-1").innerHTML*1)+ (document.getElementById("current-1").innerHTML*1)
            document.getElementById("current-1").innerHTML = 0;

            if(document.getElementById("score-1").innerHTML>=100){
                document.getElementById("newGameBTN").innerHTML= newGameBTN + '\n' + 'Player 2 Wins!' 
            }

            playerNumber=1;
            activePlayer1()
            break;
    }
}



/* Switches players and resets round score when dice rolls 1*/
function losePlayerSwitch(){
    switch(playerNumber){
        case 1:
        document.getElementById("current-0").innerHTML = 0;
        playerNumber=2;
        break;
        case 2:
        document.getElementById("current-1").innerHTML = 0;
        playerNumber=1;
        break;
    }
}


/* Changes pictures of dice to correspond to Dice Roll*/
function dicePicChange(NUM){

    switch(NUM){
        case 1:
            document.getElementById("DiceIMG").src = "dice-1.png"
        break;

        case 2:
            document.getElementById("DiceIMG").src = "dice-2.png"
        break;

        case 3:
            document.getElementById("DiceIMG").src = "dice-3.png"
        break;

        case 4:
            document.getElementById("DiceIMG").src = "dice-4.png"
        break;

        case 5:
            document.getElementById("DiceIMG").src = "dice-5.png"
        break;

        case 6:
            document.getElementById("DiceIMG").src = "dice-6.png"
        break;
    }
}

/* Resets the game*/
function newGame(){
    document.getElementById("DiceIMG").src = "dice-1.png";
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
    document.getElementById("score-0").innerHTML = 0;
    document.getElementById("score-1").innerHTML = 0;
    document.getElementById("newGameBTN").innerHTML= newGameBTN
    playerNumber = 1
    activePlayer1()
}


/*
- Darkens background colour of player 1 when active
- Whitens background colour of player 2 when player 1 is active
- Changes fontweight according to active player
- Moves red dot next to player 1 label
- Resets Dice Image on player switch
*/
function activePlayer1(){
    document.getElementById("p0").style.backgroundColor = "#f7f7f7";
    document.getElementById("p1").style.backgroundColor = "#ffffff";
    document.getElementById("name-0").style.fontWeight = "300";
    document.getElementById("name-1").style.fontWeight = "100";
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".active .player-name::after {right: 10px}";
    document.getElementById("DiceIMG").src = "dice-1.png"
}

/* Vice Versa of "activePlayer1()"*/
function activePlayer2(){
    document.getElementById("p0").style.backgroundColor = "#ffffff";
    document.getElementById("p1").style.backgroundColor = "#f7f7f7";
    document.getElementById("name-0").style.fontWeight = "100";
    document.getElementById("name-1").style.fontWeight = "300";
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".active .player-name::after {right: -480px}";
    document.getElementById("DiceIMG").src = "dice-1.png"

}


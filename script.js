var buttonColors = ['red', 'blue', 'green', 'yellow'];

var gamePattern = []; 

var userClickedPattern = [];

var level = 0;

var highScore = 0;





function nextSequence() {

    userClickedPattern = [];

    level++;

    $("h1").text("Level " + level);



    var randnum = Math.floor(Math.random() * 4);

    var randomColorArray = buttonColors[randnum];

    gamePattern.push(randomColorArray);



    $("." + randomColorArray).addClass("animated");

    setTimeout(function () {

        $("#" + randomColorArray).removeClass("animated");

    }, 100);



    var audio = new Audio("sounds/" + randomColorArray + ".mp3");

    audio.play();

}





$(".simon button").click(function () {

    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    var clickAudio = new Audio("sounds/" + userChosenColor + ".mp3");

    clickAudio.play();

    $("." + userChosenColor).addClass("pressed");

    setTimeout(function () {

        $("#" + userChosenColor).removeClass("pressed");

    }, 100);

    checkAnswer(userClickedPattern.length - 1);

});





function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {

                nextSequence();

            }, 1000);

        }

    } else {

        playSound("wrong"); 

        $("h1").addClass("game-over");

        setTimeout(function () {

            $("h1").removeClass("game-over");

        }, 200);

        $("h1").text("Game Over, Press Start to Play");



        if (level > highScore) {

            highScore = level;

            $("#highscore").text("High Score: " + highScore);

        }

        resetGame();

    }

}





function resetGame() {

    level = 0;

    gamePattern = [];

}





function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");

    audio.play();

}





$("#start").on("click", function () {

    resetGame();

    nextSequence();

}); this code has the bug it won't make me win unless I click the previously last colour

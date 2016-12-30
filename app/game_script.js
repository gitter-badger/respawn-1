var trigger = document.getElementById("startGame");
trigger.addEventListener("click", respawn);
var trigger2 = document.getElementById("start-button");
trigger2.addEventListener("click", startGame);
var i = 0;


//Initialize Boundaries
var boundX = 1024;
var boundY = 1024;
var boundZ = 1024;
//Initialize Location
var locX = Math.floor(Math.random() * (boundX + 1));
var locY = Math.floor(Math.random() * (boundX + 1));
var locZ = Math.floor(Math.random() * (boundY + 1));
//Initialize Health
var userHP = 100;
var userThirst = 100;
var userOutfit = 0;
var userName = 'Guest';


//Secret function to let the console display colors
(function () {
	$consoleLog = console.log;
  console.log = function ($message, $color) {
  	$consoleLog('%c' + $message, 'color:' + $color + ';font-weight:bold;');
  }
})();

function respawn() {
    $('.ready').hide();
    $('.frame1').fadeIn();
    $('.page-title').text("SKIP");
    $('.page-title').click(function() {
        skipTutor();
    });
    startTutor();
}

//TODO: Finish Skip-Tutor
function skipTutor() {
    startGame();
    $('.page-title').text("respawn");
    $('.page-title').click(function() {});
}

function startTutor() {
    var divs = $('span[id^="tutor-"]').hide();

    (function cycle() {

        divs.eq(i).fadeIn(400)
            .delay(2500)
            .fadeOut(400, cycle);

        i = ++i;

        if (i >= divs.length) {
            $('#start-button').fadeIn();
            return;
        }

    })();
}

function startGame() {
    $('.frame1').hide();
    update();
    $('.frame2').fadeIn();

    //Main Console
    console.log('Yo! Welcome to the game.', 'red');
    console.log('Hey!','red');
    console.log('HEYYYYYYYYY! LOOK HERE!!!', 'red');
    console.log('I bet you have read the survival guide right? Well... If you did not... Type in \"guide()\" to do so.')
    console.log('Here\'s how things work here... Red text can simply be ignored. Black text has nothing to do with the game - just clarifying information. Green text is always extremely important and related to the game. ');

    console.log('Spawned. Location: ' + locX + ", " + locY + ", " + locZ, 'green');
}

function guide() {
  window.location = "wiki/index.html";
}

function update() {
  $('#x-loc').text(locX);
  $('#y-loc').text(locY);
  $('#z-loc').text(locZ);
}

function move() {
	
}

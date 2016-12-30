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
var stat0 = 'Command successfully excecuted.';
var stat1 = 'Command error. Nothing done.';

//Secret function to let the console display colors
(function() {
    $consoleLog = console.log;
    console.log = function($message, $color) {
        $consoleLog('%c' + $message, 'color:' + $color + ';font-weight:bold;');
    }
})();

console.log('Welcome! I guess you are ready. Type \'startGame()\' to skip directly into the game.', 'blue');

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

function clear() {
    console.clear();
    return (stat0);
}

function startGame() {
    clear();
    $('.ready').hide();
    $('.frame1').hide();
    update();
    $('.frame2').fadeIn();

    //Main Console
    console.log('Yo! Welcome to the game.', 'red');
    console.log('Hey!', 'red');
    console.log('HEYYYYYYYYY! LOOK HERE!!!', 'red');
    console.log('I bet you have read the survival guide right? Well... If you did not... Type in \"guide()\" to do so.')
    console.log('Here\'s how things work here... Red text are status codes. Black text has nothing to do with the game - just clarifying information. Green text is always extremely important and related to the game. When you see purple text, there\'s gotta be something wrong with your command.');
    console.log('You can always use \'clear()\' to clear the console.', 'blue');
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

function move(dir, mag) {
    if (dir == 'x' || dir == 'X') {
        if (locX + mag <= boundX && locX + mag >= 0) {
            locX += mag;
            console.log('New Location: X: ' + locX + ', Y: ' + locY + ', Z: ' + locZ, 'green');
        } else {
            console.log('You can not move out of the ' + boundX + ' units boundary.', 'purple');
						return(stat1);
				}
    } else if (dir == 'y' || dir == "Y") {
        if (locY + mag <= boundY && locY + mag >= 0) {
            locY += mag;
            console.log('New Location: X: ' + locX + ', Y: ' + locY + ', Z: ' + locZ, 'green');
        } else {
            console.log('You can not move out of the ' + boundY + ' units boundary.', 'purple');
						return(stat1);
				}
    } else if (dir == 'z' || dir == 'Z') {
        if (locZ + mag <= boundZ && locZ + mag >= 0) {
            locZ += mag;
            console.log('New Location: X: ' + locX + ', Y: ' + locY + ', Z: ' + locZ, 'green');
        } else {
            console.log('You can not move out of the ' + boundZ + ' units boundary.', 'purple');
            return (stat1);
        }
    } else {
        console.log('Format error. Format: move(direction[\'x|y|z\'],magnitude[int])', 'purple');
        return (stat1);
    }
    update();
    return (stat0);
}

function teleport(cordX, cordY, cordZ) {
    if (cordX == undefined || cordY == undefined || cordZ == undefined) {
        console.log('Format error. Format: teleport(x-location[int],y-location[int],z-location[int])', 'purple');
        return (stat1);
    }

    if (cordX >= 0 && cordX <= boundX && cordY >= 0 && cordY <= boundY && cordZ >= 0 && cordZ <= boundZ) {
        locX = cordX;
        locY = cordY;
        locZ = cordZ;
        console.log('Teleported to (' + cordX + ', ' + cordY + ', ' + cordZ + ').', 'green');
    } else {
        console.log('You can not move out of the (' + boundX + ', ' + boundY + ', ' + boundZ + ') boundary.', 'purple');
        return (stat1);
    }
		update();
    return (stat0);
}

function location() {
    console.log('Current location: (' + locX + ', ' + locY + ', ' + locZ + ').','green');
		return (stat0);
}

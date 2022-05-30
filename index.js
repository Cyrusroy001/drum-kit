// detecting nutton press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        animateButton(buttonInnerHtml);
    });
}

// detecting keyboard press

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animateButton(event.key);
});

// utility function to make sound

function makeSound(character) {
    switch (character) {
        case "q":
            var q = new Audio("sounds/bruh.mp3");
            q.play();
            break;
            
        case "w":
            var w = new Audio("sounds/emo-dmg.mp3");
            w.play();
            break;

        case "e":
            var e = new Audio("sounds/are-you-sore.mp3");
            e.play();
            break;

        case "r":
            var r = new Audio("sounds/hentai-moan.mp3");
            r.play();
            break;

        case "t":
            var t = new Audio("sounds/the-lion-sleeps-tonight.mp3");
            t.play();
            break;

        case "y":
            var y = new Audio("sounds/what-da-dog-doin.mp3");
            y.play();
            break;

        case "u":
            var u = new Audio("sounds/windows-xp.mp3");
            u.play();
            break;
        
        default: console.log(buttonInnerHtml);
    }
}

// utility function to animate the pressed button

function animateButton(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100); // waits 100 ms before executing the function
}
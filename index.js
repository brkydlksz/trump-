window.onload = function() {
  var buttonlen = document.querySelectorAll("button").length
  for (i = 0; i <= buttonlen; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
      var buttonHtml = this.innerHTML;
      action(buttonHtml)
      switch (buttonHtml) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;

        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;

        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;

        case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;

        case "k":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;

        case "l":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;

        default:

      }

    });
  }
}

document.addEventListener("keypress", function(event) {
  var tush = event.key
  action(tush)
  switch (tush) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:

  }

});

function action(value) {
  var classy = document.querySelector("." + value);
  classy.classList.add("pressed");
  classy.style.color = "blue";
  setTimeout(function () {
  classy.classList.remove("pressed");
  classy.style.color = "yellow";

}, 100);

}

function randomPosition() {
    var button = document.getElementById("noButton");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
  
    var newLeft = Math.floor(Math.random() * (windowWidth - buttonWidth));
    var newTop = Math.floor(Math.random() * (windowHeight - buttonHeight));
  
    button.style.position = "absolute";
    button.style.left = newLeft + "px";
    button.style.top = newTop + "px";
  
    // Remove the click event listener from the "No" button
    button.removeEventListener("click", randomPosition);
  }
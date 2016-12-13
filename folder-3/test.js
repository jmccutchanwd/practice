var inputBox = document.getElementById('textInput');
var focusTgt = "";
var counter = false;

document.getElementById("contentHere").addEventListener("click", focusNow);

function focusNow(e){
    if (e.target.localName === "p"){ // checks that <p> was clicked, and its the only one
      focusTgt = e.target; // assigns the value of what is clicked to a global var
      focusTgt.className = "focusStyle"; // assigns the <p> in focus a new style that gives it a border and background
      counter = true; // flips the counter var to ensure only one <p> is selected
      document.getElementById("modText").focus(); // Adds focus and cursor to text input
      console.log("Focus applied.")
      document.getElementById("modText").value = focusTgt.innerText; // loads description to input field
    }
}

inputBox.onkeydown = function(){
    inputBox.value = document.getElementById('contentHere').innerHTML;
}
inputBox.onkeyup = function(){
    document.getElementById('contentHere').innerHTML = inputBox.value;
}

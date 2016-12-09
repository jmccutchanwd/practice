console.log("Begin");


// get the data with button

  // add event listener to a button
  document.getElementById("getUser").addEventListener("click", getUser);// getUser button

  var user; // global scope

  function saveUser(e){
    user = JSON.parse(e.target.responseText); //
    console.log("User ", user);
  }

  function getUser(){
    var userRequest = new XMLHttpRequest(); // link to JSON
    userRequest.addEventListener("load", saveUser); // after it loads, it fires a function
    userRequest.open("GET", "https://randomuser.me/api/") // what to do when open, get JSON
    userRequest.send(); // go open
  }

document.getElementById("displayUser").addEventListener("click", displayUser); // button to launch html

function displayUser(){
  console.log("Display New User");
  console.log("User", user) // tests whether global var works
  if(!user) {
    alert("Push the other button first!")
  } else {
  var stuffToDisplay = `<h3>${user.results[0].name.first} ${user.results[0].name.last}</h3>
                        <img src="${user.results[0].picture.large}">`
  }
  document.getElementById("user").innerHTML = stuffToDisplay; // inserts var of html into DOM
}


  // create a request


// display the data with a button

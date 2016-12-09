console.log("Begin");

function loadMessages(e){
  var data = JSON.parse(e.target.responseText);
  console.log("messages loaded", data);
  var slackContent = "";
  for (var i = 0; i < data.messages.length; i++) {
    slackContent += `<div class="box">
                      <date>${data.messages[i].date}</date>
                      <h3>${data.messages[i].sender}</h3
                      <p>${data.messages[i].content}</p>
                    </div> `
  }
  document.getElementById("slack").innerHTML = slackContent;
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", loadMessages);
myRequest.open("GET", "https://mt-slack-clone.firebaseio.com/.json");
myRequest.send();

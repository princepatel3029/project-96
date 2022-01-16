 var firebaseConfig = {
      apiKey: "AIzaSyApd6A-JnPb-RDtoHUS3PtMbRngS75FE-g",
      authDomain: "first-timer-db63c.firebaseapp.com",
      databaseURL: "https://first-timer-db63c-default-rtdb.firebaseio.com",
      projectId: "first-timer-db63c",
      storageBucket: "first-timer-db63c.appspot.com",
      messagingSenderId: "1033031066380",
      appId: "1:1033031066380:web:97bcd30683f89a41f4df29"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome" + user_name + " !";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      console.log("room name =" + Room_names);
      row = "<div class='room_name' id="+ Room_names + " onclick ='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML + = row;
      //End code
      });});}
getData();

function redirectToRoomName(name)  {
  console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
} 

function logout() {
  localStorage.romoveItem("user_name");
  localStorage.romoveItem("room_name");
  window.location = "kwitter.html";
}



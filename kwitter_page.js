var firebaseConfig = {
      apiKey: "AIzaSyApd6A-JnPb-RDtoHUS3PtMbRngS75FE-g",
      authDomain: "first-timer-db63c.firebaseapp.com",
      databaseURL: "https://first-timer-db63c-default-rtdb.firebaseio.com",
      projectId: "first-timer-db63c",
      storageBucket: "first-timer-db63c.appspot.com",
      messagingSenderId: "1033031066380",
      appId: "1:1033031066380:web:97bcd30683f89a41f4df29"
    };
    
    
    firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name:user_name, 
            message:msg,        
            like: 0
});


document.getElementById("msg").value = "";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
massage = massage_data['mssage'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<ing class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>" + message + " </h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value = " + " onclick='updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: " + like + "</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML + row;
//End code
      } });  }); }
getData();

function updatelike(message_id) {
   console.log("click on like button - " + message_id);
   button_id = message_id;
   like= document.getElementById(button_id).value
   update_likes = Number(like) + 1;
   console.log(update_likes);

   firebase.database().ref(room_name).child(message_id).update({
like: update_likes
});

}
function logout()  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      localStorage.replace("kwitter.html");
}

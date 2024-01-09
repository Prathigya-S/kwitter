//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAVq3HRswDcKVWl1eyPUThO9trnRHuO6IY",
      authDomain: "kwitter-785eb.firebaseapp.com",
      databaseURL: "https://kwitter-785eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-785eb",
      storageBucket: "kwitter-785eb.appspot.com",
      messagingSenderId: "288877290873",
      appId: "1:288877290873:web:c6026b51de274f06a1bba8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name" );
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)

var name=message_data["name"];
var message=message_data["message"];
var like=message_data["like"];

name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id +" value="+like+" onclick='updated_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up' >Like: "+like+"</span> </button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+= row;
//End code
      } });  }); }
getData();

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send(){
      var msg=document.getElementById("input_message").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("input_message").value="";
}

function updated_like(message_id){
      console.log("clicked on like button="+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
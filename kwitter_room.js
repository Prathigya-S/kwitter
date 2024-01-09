
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    

    function add_room(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name= "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='open_kwitter_page(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+= row; 
      //End code
      });});}
getData();

function open_kwitter_page(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
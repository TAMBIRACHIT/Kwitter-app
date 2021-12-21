const firebaseConfig = {
          apiKey: "AIzaSyCcwZa6FFTtYr57EmOn8EU4RkARUE9f8wQ",
          authDomain: "kwitter-app-9d3a2.firebaseapp.com",
          databaseURL: "https://kwitter-app-9d3a2-default-rtdb.firebaseio.com",
          projectId: "kwitter-app-9d3a2",
          storageBucket: "kwitter-app-9d3a2.appspot.com",
          messagingSenderId: "214973188826",
          appId: "1:214973188826:web:3d64f5cd248edf366033e3"
        };
        
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        user_name = localStorage.getItem("user_name");

        document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
        
        function addRoom()
        {
          room_name = document.getElementById("room_name").value;
        
          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
        
            localStorage.setItem("room_name", room_name);
            
            window.location = "kwitter_page.html";
        }
        
        function getData() {  
          firebase.database().ref("/").on('value', function(snapshot) 
          { 
            document.getElementById("output").innerHTML = ""; 
             snapshot.forEach(function(childSnapshot) 
             { childKey  = childSnapshot.key;
               Room_names = childKey;
               console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
              document.getElementById("output").innerHTML += row;
            });
          });
        
        }
        
        getData();
        
        function redirectToRoomName(name)
        {
          console.log(name);
          localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
        }
        
        function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
            window.location = "kwitter.html";
        }
        
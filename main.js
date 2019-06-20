;(function(){
  	var config = {
    apiKey: "AIzaSyDgKU5U3abDkd_u7ZL8clc7CapwtQN6fdM",
    authDomain: "appchatfirebase-68072.firebaseapp.com",
    databaseURL: "https://appchatfirebase-68072.firebaseio.com",
    projectId: "appchatfirebase-68072",
    storageBucket: "appchatfirebase-68072.appspot.com",
    messagingSenderId: "721778198931"
  };
  firebase.initializeApp(config);



var database = firebase.database()  
var loginBtn = document.getElementById('start-login')
var user = null
var usuariosConectados = null
var conectadokey = ""


 loginBtn.addEventListener("click",googleLogin)


function googleLogin(){
var provider = new firebase.auth.GoogleAuthProvider()

firebase.auth().signInWithPopup(provider)
        .then(function(result){
          user = result.user
        $("#login").fadeOut()
        initApp()  
              })
}

function initApp() {
  usuariosConectados = database.ref("/connected")
  login(user.uid, user.displayName || user.email)
}

function login(uid,name){
var conectado = usuariosConectados.push({
  uid: uid,
  name: name
})

conectadokey = conectado.key 
}


})()
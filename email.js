function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //valida o dominio - email

    if(email.match(pattern)){
       text.innerHTML = "";
       text.style.color = "#00ff00";
    }else{
        text.innerHTML = "Por favor valide o seu e-mail";
        text.style.color = "#ff0000";
    }

    if(email == ""){
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

function validationPassword(){
    var form = document.getElementById("form");
    var senha = document.getElementById("senha").value;
    var passwordResponse = document.getElementById("passwordResponse"); //valida a senha

    var patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/;

    if(senha.match(patternPassword)){
        passwordResponse.innerHTML = "";
        passwordResponse.style.color = "#00ff00";
    }else{
        passwordResponse.innerHTML = "Por favor valide a sua senha";
        passwordResponse.style.color = "#ff0000";
    }
    if(senha == ""){
        passwordResponse.innerHTML = "";
        passwordResponse.style.color = "#00ff00";
    }
}
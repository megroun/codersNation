function disable(release){
    btn = document.getElementById('btn1')
    btn.disabled = false;
    btn.style.border = "2px solid red";
};

function validation(){
    username = document.getElementById('username');
    password = document.getElementById('psw');
    cpassword = document.getElementById('cpsw');
    btn = document.getElementById('btn1');
    if(username.value.length<6){
        // username.style.border = "2px solid red";
    }
    else if(password.value.length<6){
        password.style.border = "2px solid red";         
    }
    else if(cpassword.value.length<6){
        cpassword.style.border = "2px solid red";
    }
    else if(cpassword.value !== password.value){
        cpassword.style.border = "2px solid red";
        password.style.border = "2px solid red";
    }
    else{
    //    username.style.border = "2px solid green"; 
       cpassword.style.border = "2px solid green";
       password.style.border = "2px solid green";
       alert("Login success");
       window.location.href = ("testOne.html");   
    }
};


var us,em,pn,ps,cps;

// username validation
function username(){
    var a=document.getElementById('uservalue').value;
    if(a==""){
        document.querySelector("#userfield").classList="fail";
        us = 0;
    }
    else{
    document.querySelector("#userfield").classList="success";
    us=1;
    }
}

// email validation
function email(){
    var c=document.getElementById('emailvalue').value;
    var d=/^([A-Za-z0-9\.-_]+)@([A-Za-z0-9\-]+)\.([A-Za-z]{2,3})((\.[A-Za-z]{2,3})?)$/;
    if(d.test(c)){
        document.querySelector("#emailfield").classList="success";
        em = 1;
    }
    else{
    document.querySelector("#emailfield").classList="fail";
    em=0;
    }
}

// Phone number validation
function phonenumber(){
    var e=document.getElementById('phonevalue').value;
    var f=/^([\w]{0}[\d]{10})$|^([\w]{0}[\d]{3}[\.][\d]{3}[\.][\d]{4})$|^([\w]{0}[\d]{3}[\-][\d]{3}[\-][\d]{4})$|^([\w]{0}[\d]{3}[\s][\d]{3}[\s][\d]{4})$/;
    if(f.test(e)){
        document.querySelector("#phonefield").classList="success";
        pn = 1;
    }
    else{
    document.querySelector("#phonefield").classList="fail";
    pn=0;
    }
}

// Password validation
function password(){
    var g=document.getElementById('passvalue').value;
    var h= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(h.test(g)){
        document.querySelector("#passfield").classList="success";
        ps = 1;
    }
    else{
    document.querySelector("#passfield").classList="fail";
    ps=0;
    }
}

// Confirm password validation and checking whether password and confirm password same
function cpassword(){
    var p=document.getElementById('passvalue').value;
    var i=document.getElementById('cpassvalue').value;
    var j= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(j.test(i)&& p==i ){
        document.querySelector("#cpassfield").classList="success";
        cps = 1;
    }
    else{
    document.querySelector("#cpassfield").classList="fail";
    cps=0;
    }
}


// validating signup form
function signupvalidate(){
        if(us==1 && em== 1){
        if(pn==1 && ps==1){
            if(cps==1){
            return true;
            }
            else
            return false;
            }
    else
    return false;
    }
    else 
    return false;
}


// validating login form
function loginvalidate(){
    if(em==1 && ps==1){
        return true;
    }
    else
    return false;
}


let passwordInput = document.querySelector('#passfield input[type="password"]');
let passwordStrength= document.getElementById('passwordStrength');
let poor = document.querySelector('#passwordStrength #poor');
let medium = document.querySelector('#passwordStrength #medium');
let strong = document.querySelector('#passwordStrength #strong');
let passwordInfo = document.getElementById('passwordInfo');


// Regular Expression for poor password, medium password and strong password
let poorRegExp = /[a-z]/;
let mediumRegExp = /(?=.*?[0-9])/;;
let strongRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let whitespaceRegExp = /^$|\s+/;

// Checking password strength
function strengthchecker(){
            let passwordValue= passwordInput.value;
            let passwordLength= passwordValue.length;
            let poorPassword= passwordValue.match(poorRegExp);
            let mediumPassword= passwordValue.match(mediumRegExp);
            let strongPassword= passwordValue.match(strongRegExp);
            let whitespace= passwordValue.match(whitespaceRegExp);
            
            if(passwordValue != ""){
                passwordStrength.style.display = "block";
                passwordStrength.style.display = "flex";
                passwordInfo.style.display = "block";
                passwordInfo.style.color = "black";
                if(whitespace){
                    passwordInfo.textContent = "whitespaces are not allowed";
                }else{
                    poorPasswordStrength(passwordLength, poorPassword, mediumPassword, strongPassword);
                    mediumPasswordStrength(passwordLength, poorPassword, mediumPassword, strongPassword);
                    strongPasswordStrength(passwordLength, poorPassword, mediumPassword, strongPassword);
                }
            }else{
                passwordStrength.style.display = "none";
                passwordInfo.style.display = "none";
            }
}
        
// checking for poor password
function poorPasswordStrength(passwordLength, poorPassword, mediumPassword, strongPassword){
        if(passwordLength <= 3 && (poorPassword || mediumPassword || strongPassword)){
            poor.classList.add("active");
            passwordInfo.style.display = "block";
            passwordInfo.style.color = "red";
            passwordInfo.textContent = "Your password is too Poor";
        }
}

// checking for medium password
function mediumPasswordStrength(passwordLength, poorPassword, mediumPassword, strongPassword){
        if(passwordLength>= 4 && poorPassword && (mediumPassword || strongPassword))
        {
            poor.classList.remove("active");
            medium.classList.add("active");
            passwordInfo.textContent = "Your password is Medium";
            passwordInfo.style.color = "orange";
        }else{
            medium.classList.remove("active");
            
    }
}

// checking for strong password
function strongPasswordStrength(passwordLength, poorPassword, mediumPassword, strongPassword){
        if(passwordLength >= 7 && (poorPassword && mediumPassword) && strongPassword)
        {
            poor.classList.remove("active");
            medium.classList.remove("active");
            strong.classList.add("active");
            passwordInfo.textContent = "Your password is strong";
            passwordInfo.style.color = "green";
        }else{
            strong.classList.remove("active");            
    }
}


function Toggle1() {
    var temp = document.getElementById("passvalue");
    const eye = document.querySelector('#password-eye1');
    if (temp.type === "password") {
        temp.type = "text";
        eye.classList.remove('fa-eye');  
        eye.classList.add('fa-eye-slash');
    }
    else {
        temp.type = "password";
        eye.classList.add('fa-eye');  
        eye.classList.remove('fa-eye-slash');
    }
}

function Toggle2() {
    var temp = document.getElementById("cpassvalue");
    const eye = document.querySelector('#password-eye2');
    if (temp.type === "password") {
        temp.type = "text";
        eye.classList.remove('fa-eye');  
        eye.classList.add('fa-eye-slash');
    }
    else {
        temp.type = "password";
        eye.classList.add('fa-eye');  
        eye.classList.remove('fa-eye-slash');
    }
}

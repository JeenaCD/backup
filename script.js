
var us,em,pn,ps,cps;
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
let weak = document.querySelector('#passwordStrength #weak');
let strong = document.querySelector('#passwordStrength #strong');
let passwordInfo = document.getElementById('passwordInfo');

let poorRegExp = /[a-z]/;
let weakRegExp = /(?=.*?[0-9])/;;
let strongRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let whitespaceRegExp = /^$|\s+/;

function strengthchecker(){

     let passwordValue= passwordInput.value;
     let passwordLength= passwordValue.length;

     let poorPassword= passwordValue.match(poorRegExp);
     let weakPassword= passwordValue.match(weakRegExp);
     let strongPassword= passwordValue.match(strongRegExp);
     let whitespace= passwordValue.match(whitespaceRegExp);

if(passwordValue != ""){

 passwordStrength.style.display = "block";
 passwordStrength.style.display = "flex";
 passwordInfo.style.display = "block";
 passwordInfo.style.color = "black";

 if(whitespace)
 {
  passwordInfo.textContent = "whitespaces are not allowed";
 }else{
 poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
 weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
 strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
}

 
}else{
 
 passwordStrength.style.display = "none";
 passwordInfo.style.display = "none";

}
}

function poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){

  if(passwordLength <= 3 && (poorPassword || weakPassword || strongPassword))
    {
   poor.classList.add("active");
   passwordInfo.style.display = "block";
   passwordInfo.style.color = "red";
   passwordInfo.textContent = "Your password is too Poor";
      
    }
}

function weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
if(passwordLength>= 4 && poorPassword && (weakPassword || strongPassword))
{
 weak.classList.add("active");
 passwordInfo.textContent = "Your password is Weak";
 passwordInfo.style.color = "orange";

}else{
 weak.classList.remove("active");
 
}
}

function strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){

if(passwordLength >= 7 && (poorPassword && weakPassword) && strongPassword)
{
 poor.classList.add("active");
 weak.classList.add("active");
 strong.classList.add("active");
 passwordInfo.textContent = "Your password is strong";
 passwordInfo.style.color = "green";
}else{
 strong.classList.remove("active");
 
}
}




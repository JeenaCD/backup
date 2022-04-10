// var email=document.getElementById("email");
// var pwd=document.getElementById("pwd");
// var msg=document.getElementById("msg");
// function validate(){
//     let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
//     if(regexp.test(email.value)){
//         msg.innerHTML="valid";
//         msg.style.color="green";
//         return true;
//     }
//     else{
//         msg.innerHTML="invalid";
//         msg.style.color="red";
//         return false;
//     }

// }
var us,em,pn,ps,cps;
function username(){
    var a=document.getElementById('uservalue').value;
    var b=/^([A-Za-z]+)((\s)?[A-Za-z]*)((\s)?[A-Za-z]*)$/;
    if(b.test(a)){
        document.querySelector("#userfield").classList="success";
        us = 1;
    }
    else{
    document.querySelector("#userfield").classList="fail";
    us=0;
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
 



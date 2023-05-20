var pass1=false,pass2=false;
var name1=document.getElementById("name");
var email=document.getElementById("email");
var submit=document.getElementById("submit");
 var span = document.createElement("span");
 var span1 = document.createElement("span");

 name1.addEventListener("input",CheckName);
 email.addEventListener("input",CheckMail);
 submit.addEventListener("click",function(e){
    e.preventDefault();
    CheckName();
    CheckMail();
    if(pass1==true&&pass2==true){
        window.location.href="http://127.0.0.1:5500/Thanks.html";
    }
 })

function CheckName() {
    var error = document.getElementById("ErrorName");
    if (name1.value.length >= 3) {
      name1.style.border = "2px solid green";
      span.innerHTML="";
      span.style.color="green";
      error.appendChild(span);
      pass1=true;
    } 
    if (name1.value.length <3) {
      name1.style.border = "2px solid red";
           span.innerHTML = "Enter Vaild Name";
           span.style.color="red";
           error.appendChild(span);
           pass1=false;
    }
  }


function CheckMail() {
    var error = document.getElementById("ErrorEmail");
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(email.value)) {
        email.style.border = "2px solid green";
      span1.innerHTML="";
      error.appendChild(span1);
      pass2=true;
      } else {
        email.style.border = "2px solid red";
           span1.innerHTML = "Enter Vaild Email Example (mostafa@gmail.com)";
           span1.style.color="red";
           error.appendChild(span1);
           pass2=false;
      }
  }


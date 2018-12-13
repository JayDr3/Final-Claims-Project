var myInput = document.getElementById("password");
var lowerc = document.getElementById("lower");
var upperc = document.getElementById("upper");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the password requirement box
myInput.onfocus = function()
{
    document.getElementById("pswreq").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function()
{
    document.getElementById("pswreq").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function()
{
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) 
  {  
    lowerc.classList.remove("invalid");
    lowerc.classList.add("valid");
  } 
  else 
  {
    lowerc.classList.remove("valid");
    lowerc.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) 
  {  
    upperc.classList.remove("invalid");
    upperc.classList.add("valid");
  } 
  else 
  {
    upperc.classList.remove("valid");
    upperc.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) 
  {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else 
  {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 6) 
  {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } 
  else 
  {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

//Matching and verifying the password
function verify()
    {
        var p=document.getElementById("password").value;
        var vp=document.getElementById("vpassword").value;
        if(p!=vp)
        {
            alert("Make sure passwords match")
            return false;
        }
        else
        {
            return true;
        }
    }
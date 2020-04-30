function digitsOnly(input) {

  var regex = /[^0-9]/gi;
  input.value = input.value.replace(regex, "");
  
  myKeyPress(input);
}

function myKeyPress(e){

 
  var mytextbox = document.getElementById("textinput").value;
  
  // for testing purposes
  console.log("Initial input: "+ mytextbox);
  // for testing purposes
  console.log("Length:  " + mytextbox.length);

  if (mytextbox.length > 11) {
    // alert message onto webpage
    alert("Limit: 10 Digits");
    // close
    return false;
  }

  var keyPressed;
  if(window.event) { // IE
    keyPressed = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var x = String.fromCharCode(keyPressed);
  var y = formatPhoneNumber(mytextbox);

  console.log("Key Pressed = " + x);
  console.log("  Formatted = " + y);

  if (mytextbox.length < 11) {

    document.getElementById('textinput').value = y;  
    
  }

}

function formatPhoneNumber(val){

  /* TODO:  Use replace function to ignore extra - character */
    var value = strReplace(val);
  
  if(value.length > 3 && value.length <= 6)
    value = value.slice(0,3) + "-" + value.slice(3);
  else if(value.length > 6)
    value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);
  // for testing purposes
  console.log("from Format: " + value);

  return value;
}
// Replace function
function strReplace(val) {

  var myStr = val;
  // for testing purposes
  console.log("from Replace before: " + myStr);
  
  var newStr = myStr.replace(/-/g, "");
  // for testing purposes
  console.log("from Replace after: " + newStr);

  return newStr;
}

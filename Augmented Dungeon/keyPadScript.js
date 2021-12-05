let clicks = 0;
let attempts = 0;
let sequence = 0;
let sC = localStorage.getItem("successCheck");

function loadCheck(){

  console.log(sC);
  if(sC!=0){
    document.getElementById("counter").innerHTML = "SUCCESS: CODE ACCEPTED";
    document.getElementsByClassName("afterPasswordSuccess")[0].style.display="block";
    document.getElementsByClassName("afterPasswordSuccess")[1].style.display="block";
  }
}

function wrongPress()
{
  checker();
  if(attempts>0){
    let message = "ERROR: YOU HAVE ";
    message += 3-attempts;
    message += " ATTEMPTS LEFT";
    document.getElementById("counter").innerHTML = message;
    if(attempts>=3){
      document.getElementById("counter").innerHTML = "FAILURE: COMPUTER LOCKED";
    }
  }
}

function checker(){
  clicks++;
  if(clicks==3){
    attempts++;
    clicks=0;
  }
}

function rightPress()
{
  if(clicks==0&&attempts<3){
    sequence = 1;
    clicks++;
  }
  else{
    wrongPress();
  }
}

function right2Press()
{
  if(sequence==1&&clicks==1){
    sequence=2;
    clicks++;
  }
  else{
    wrongPress();
  }
}

function right3Press()
{
  if(sequence==2){
    sequence=3;
    document.getElementById("counter").innerHTML = "SUCCESS: CODE ACCEPTED";
    document.getElementsByClassName("afterPasswordSuccess")[0].style.display="block";
    document.getElementsByClassName("afterPasswordSuccess")[1].style.display="block";
    localStorage.setItem("successCheck", 1);
  }
  else{
    wrongPress();
  }
}
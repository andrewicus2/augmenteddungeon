let clicks = 0;
let attempts = 0;
let sequence = 0;

function hideMe(){
    document.getElementById("afterPasswordSuccess").style.display = "none";
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
    document.getElementById("afterPasswordSuccess").style.display = "block";
  }
  else{
    wrongPress();
  }
}
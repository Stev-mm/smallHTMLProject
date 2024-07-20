var htmlName = document.getElementById("name");


function rdmColor(){
  
  var randomColor = Math.floor(Math.random()*16777215).toString(16);

  htmlName.style.color = "#" + randomColor;
  console.log(randomColor);
}


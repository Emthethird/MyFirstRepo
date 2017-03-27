script.js
function myFunction(){
    var x = document.getElementByld("textBox").value;
var averageWords = 0
var words = 0
var Spaces = 0
var Sentences = 0
}
for(var i=0; i<=x.length;i++){
  if (x[i]===''){
    spaceCounter++;
    wordCounter++;
  }
 if(x[i]==='.'||x[i]==='?'||x[i]==='!'){
   sentenceCounter++;
averageWords = wordCounter/sentenceCounter
 }
 document.getElementByld("row1").innerHTML = 'There are'+wordCounter+'words in this text.';
 document.getElementByld("row2").innerHTML = 'There are'+wordCounter+'words in this text.';
 document.getElementByld("row3").innerHTML = 'There are'+wordCounter+'words in this text.';
 document.getElementByld("row4").innerHTML = 'There are'+wordCounter+'words in this text.';
}

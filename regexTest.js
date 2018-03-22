
var output = document.getElementById("output");
var submit = document.getElementById("submit");

var findText = function(str) {
var re = /\(\w+\,\s+\d+\)|\(\w+\,\d+\)|\(\d+\)|\([a-zA-Z\s\,]+\d+\)/g;
  var found_array = str.match(re);
  return found_array
};

document.getElementById("myBtn").addEventListener("click", function(){
  var str = document.getElementById("textArea").value;
  document.getElementById("textAreaOutput").innerHTML = findText(str);
});

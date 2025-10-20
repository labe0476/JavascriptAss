var output = document.getElementById("output");
function addInput(x) {
  output.value += x;
}

function equalto() {
  output.value = eval(output.value);
}

function clearIt() {
  output.value = '';
}

function del() {
  output.value =  output.value.slice(0, -1);
}


var j = 1;
var i = 0;

function getdata() {
  console.log("yes");
  if (i <= 3) {
    var arr = document.getElementById("line-" + j).children;

    if (i >= 0) {
      document.getElementById(arr[i].id).setAttribute("readOnly", "true");
    }
    document.getElementById(arr[i + 1].id).focus();
    document.getElementById(arr[i + 1].id).removeAttribute("readonly");
    if (i < 3) i++;
  }
}

function del_enter() {
  var key = event.keyCode || event.charCode;
  // console.log(key);
  if (i == 3 && key == 13) {
    validate();
    let next_line = document.getElementById("line-" + j).children;
    document.getElementById(next_line[0].id).focus();
    i = 0;
  }
  if (i >= 0 && j < 7 && key == 8) {
    console.log(i);
    backspace();
    console.log(i);
  }
}

function validate() {
  let new_word = "sahil";
  var array = document.getElementById("line-" + j).children;
  let in_ans = "";
  for (k = 0; k < array.length; k++) {
    let alpha = document.getElementById(array[k].id);
    in_ans = in_ans + document.getElementById(alpha.id).value;
    document.getElementById(alpha.id).readOnly = true;
    if (in_ans[k] == new_word[k]) {
      document.getElementById(alpha.id).style.backgroundColor = "#538d4e";
    } else if (new_word.includes(in_ans[k])) {
      document.getElementById(alpha.id).style.backgroundColor = "#b59f3b";
    }
  }
  j++;
}

function backspace() {
  // console.log(i);
  let bac = document.getElementById("line-" + j).children;
  let beta = document.getElementById(bac[i + 1].id);
  document.getElementById(beta.id).value = "";
  document.getElementById(beta.id).readOnly = true;
  if (i >= 0) {
    document.getElementById(bac[i].id).removeAttribute("readonly");
    document.getElementById(bac[i].id).focus();
  }
  if (i != 0) i--;
}

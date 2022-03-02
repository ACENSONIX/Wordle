function goto() {}
var j = 1;
var i = 0;
let word = "SAHIL";

function getdata() {
  if (i <= 4) {
    var arr = document.getElementById("line-" + j).children;

    if (i - 1 >= 0) {
      document.getElementById(arr[i - 1].id).setAttribute("readOnly", "true");
    }
    document.getElementById(arr[i + 1].id).focus();
    document.getElementById(arr[i + 1].id).removeAttribute("readonly");
    i++;
  }
}

function del_enter() {
  var key = event.keyCode || event.charCode;
  console.log(key);
  if (i == 4 && key == 13) {
    validate();
    let next_line = document.getElementById("line-" + j).children;
    document.getElementById(next_line[0].id).focus();
    i = 0;
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
      document.getElementById(alpha.id).style.backgroundColor =
        "rgb(223, 207, 62)";
    } else {
      document.getElementById(alpha.id).style.backgroundColor =
        "rgb(149, 145, 158)";
    }
  }
  j++;
}

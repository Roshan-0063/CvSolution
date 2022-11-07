function validate(sentence, letter, count) {
  var ocr = 0;
  count = 1;
  str = document.getElementById("sentence").value;
  ltr = document.getElementById("ltr").value;

  if (count == 0) {
    document.write(str);
    return;
  }
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == ltr) {
      ocr++;
    }
    if (ocr == count) {
      break;
    }
  }
  if (i < str.length - 1) {
    alert("The Result: " + str.substring(i + 1));
  } else {
    alert("Sorry! letter is Not Aviable");
  }
}
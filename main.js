const passwordBox = document.getElementById("password");
const lenght = 12;

const uppeCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numBer = "0123456789";
const symBol = "@#$%^&*()_+}{:|?/>~!-";
const allChars = uppeCase + lowerCase + numBer + symBol;

function createPassword() {
  let password = "";
  password += uppeCase[Math.floor(Math.random() * uppeCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numBer[Math.floor(Math.random() * numBer.length)];
  password += symBol[Math.floor(Math.random() * symBol.length)];

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
function copy() {
  passwordBox.select();
  document.execCommand("copy");
}

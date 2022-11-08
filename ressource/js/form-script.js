let age = document.getElementById('age');
let text = document.getElementById('firstname');
let logAge = document.getElementById('a-hard-truth');
let logText = document.getElementById('display-firstname');
let logPwd = document.getElementById('pwd');
let logSndPwd = document.getElementById('pwd-confirm');
let darkMode = document.getElementById('toggle-darkmode');

age.addEventListener('keyup', ageKey);
text.addEventListener('keyup', logKey);
logPwd.addEventListener('keyup', pwdKey);
logSndPwd.addEventListener('keyup', sndPwdKey);
darkMode.addEventListener('change', darkmodeKey);

function darkmodeKey() {
    //console.log('selectedIndex => '+this.selectedIndex);
    if (darkMode.selectedIndex == 0) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
    else if (darkMode.selectedIndex == 1) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

function ageKey() {
  console.log(age.value)
  if (age.value >= 18) {
    logAge.style.visibility = "visible";
  } else {
    logAge.style.visibility = "hidden";
  }
}

function logKey(e) {
  logText.textContent += `${e.key}`;
}

function pwdKey() {
    if (logPwd.value.length < 6) {
        logPwd.style.backgroundColor = 'red';
    }
    else {
        logPwd.style.backgroundColor = 'transparent';
    }
}

function sndPwdKey() {
    if (logPwd.value == logSndPwd.value) {
        logSndPwd.style.backgroundColor = 'transparent';
    }
    else {
        logSndPwd.style.backgroundColor = 'red';
    }
}
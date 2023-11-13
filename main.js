const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");


function getRandomLower(){
    const lowerarr="qwertyuiopasdfghjklzxcvbnm";
    return lowerarr[Math.floor(Math.random() * lowerarr.length)]
}
console.log(getRandomLower())
function getRandomUpper(){
    const upperarr="QWERTYUIOPASDFGHJKLZXCVBNM";
    return upperarr[Math.floor(Math.random() * upperarr.length)]
}
console.log(getRandomUpper())
function getRandomNumber() 
{
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber())
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol())
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };
  generate.addEventListener("click", () => {
    const length = +lengthEl.value;
    console.log( typeof length)
    const hasLower = lowercaseEl.checked;
    console.log(hasLower)
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
  
    resultEl.innerText = generatePassword(
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      length
    );
  });
  
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;
  console.log(typesCount)
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  console.log(typesArr)

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
    //   console.log(funcName)
      generatedPassword += randomFunc[funcName]();
      console.log(generatedPassword)
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}


clipboard.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Kopyalandi");
});






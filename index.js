const converterInput = document.querySelector("input.input--to-be-converted");
const converterOutput = document.querySelector("output.output--is-converted");
const decodeButton = document.querySelector(".btn-decode");
const encodeButton = document.querySelector(".btn-encode");
const errMessage = document.querySelector("p.error-message");



decodeButton.addEventListener('click', (e)=>{
  e.preventDefault();
  let value = converterInput.value.toString();
  try {
    converterOutput.value = B64ToUni(value);
  } catch (error) {
    errMessage.textContent = error.toString();
    errMessage.style.opacity =1;
  }
})

encodeButton.addEventListener('click', (e)=>{
  e.preventDefault();
  let value = converterInput.value.toString();
  try {
    converterOutput.value = UniToB64(value);
  } catch (error) {
    errMessage.textContent = error.toString();
        errMessage.style.opacity =1;
  }

})


function UniToB64(text) {
  return btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, (match, p1) => {
    return String.fromCharCode('0x' + p1);
  }));
}


function B64ToUni(text) {
  return decodeURIComponent(atob(text).split('').map( c => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}


// function UniToB64(str) {
//   return window.btoa(encodeURIComponent(escape(str)));
// }

// function B64ToUni(str) {
//   return unescape(decodeURIComponent(window.atob(str)));
// }


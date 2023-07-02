let input = document.querySelector(".email-input");
let btn = document.querySelector(".btn");
let errorMsgEle = document.querySelector(".error-msg");
let errorIcon = document.querySelector(".error-icon");
let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function errorMsg() {
  if (input.value === "") {
    input.classList.add("error");
    errorIcon.style.display = "block";
    return "This feild is required";
  } else {
    if (reg.test(input.value)) {
      input.classList.remove("error");
      errorIcon.style.display = "none";
      return "";
    } else {
      input.classList.add("error");
      errorIcon.style.display = "block";
      return "Please enter a valid email Address";
    }
  }
}

btn.addEventListener("click", () => {
  errorMsgEle.innerHTML = errorMsg();
});
input.addEventListener("input", () => {
  errorMsgEle.innerHTML = errorMsg();
});

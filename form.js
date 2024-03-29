document.addEventListener("DOMContentLoaded", function () {
  let send = document.querySelector(".send");
  let emailF = document.querySelector(".emailF");
  let emailForm = document.querySelector(".emailForm");
  let error = document.querySelector(".error");

  send.addEventListener("click", function (event) {
    event.preventDefault();

    let validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailF.value.match(validRegex)) {
      emailForm.style.borderBottom = "1px solid green";
      error.style.display = "none";
    } else {
      emailForm.style.borderBottom = "1px solid red";
      error.style.display = "block";
    }
  });
});

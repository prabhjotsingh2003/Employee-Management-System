/* start for control coding */
var registerForm = document.querySelector("#register-form");
var allInput = registerForm.querySelectorAll("input");
var addBtn = document.querySelector("#add-btn");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-icon");

addBtn.onclick = function () {
  modal.classList.add("active");
};

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  var i;
  for (i = 0; i < allInput.length; i++) {
    allInput[i].value = "";
  }
});

/* start all global variable */
var userData = [];
var profile_pic = document.querySelector("#profile-pic");
var uploadPic = document.querySelector("#upload-field");
var idEl = document.getElementById("id");
var nameEl = document.querySelector("#name");
var l_nameEl = document.getElementById("l-name");
var emailEl = document.querySelector("#email");
var officeEl = document.querySelector("#office-code");
var jobTitleEl = document.querySelector("#job-title");
var registerBtn = document.querySelector("#register-btn");
var updateBtn = document.querySelector("#update-btn");
var imgUrl;

/* end all global variable*/

/* start register coding */

registerForm.onsubmit = function (e) {
  e.preventDefault();
  registrationData();
  getDataFromLocal();
  registerForm.reset("");
  closeBtn.click();
};
const userDetailsEl = document.querySelector(".user-details");
const formContainerEl = document.querySelector(".form-container")
const btn = document.getElementById("btn");
let name;
let username;
let email;
btn.addEventListener("click", (e) => {
    e.preventDefault();
    name = formContainerEl.querySelector("#name").value;
    username = formContainerEl.querySelector("#username").value;
    email = formContainerEl.querySelector("#email").value;
    if (!email.includes("@")) {
      alert("Please enter a proper email id");
    } else if (name === "" || username === "" || email === "") {
      alert("Please fill form details Properly ");
    } else 
      formContainerEl.querySelector("#name").value = "";
      formContainerEl.querySelector("#username").value = "";
      formContainerEl.querySelector("#email").value = "";
      userDetailsEl.innerHTML = `
}
function emailChecker() {
  const email = document.getElementById("email").value;
  console.log(email);
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormat)) {
    document.getElementById("alert").innerHTML = "Valid email addresss!";
    document.getElementById("alert").style.color = "#2EC361";
  } else {
    document.getElementById("alert").innerHTML =
      "Please enter a valid email address!";
    document.getElementById("alert").style.color = "#ff4242";
  }
}

document.querySelector(".btn").addEventListener("click", emailChecker);

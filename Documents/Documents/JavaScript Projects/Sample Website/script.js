function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "password") {
        window.location.href = "http://127.0.0.1:3000/profile.html";
    } else {
      document.getElementById("message").innerHTML = "Invalid username or password";
    }
  }

  function getRecipe() {
    //getRecipe
  }
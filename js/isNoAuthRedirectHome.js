const isNoAuthRedirectHome = () => {
  if (!localStorage.getItem("email") && !localStorage.getItem("password")) {
    location.href = "../index.html";
  }
}

isNoAuthRedirectHome();
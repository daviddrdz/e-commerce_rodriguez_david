const isAuthRedirectHome = () => {
  if (localStorage.getItem("email") && localStorage.getItem("password")) {
    location.href = "../index.html";
  }
}

isAuthRedirectHome();
const form = document.querySelector(".form");
const api = `https://fakestoreapi.com/auth/login`;
const handleSubmit = (e) => {
  e.preventDefault();
  const username = form["username"].value.trim();
  const password = form["password"].value.trim();
  const user = {
    username,
    password,
  };
  fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      const token = data.token;

      if (token) {
        localStorage.setItem("token", token);
        alert("You are in a good way!");
        window.location.href = "../page2/profile.html";
      }
    });
  console.log(username, password);
};
form.addEventListener("submit", handleSubmit);

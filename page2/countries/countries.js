// const api = "https://restcountries.com/v3.1/all"
// const block = document.querySelector(".mini-big")
// fetch(api)
//   .then((res) => res.json())
//   .then((product) => {
//     innerData(product);
//     console.log("hello");
    
//   });
// function innerData(product) {
//   product.map(({ name, capital, population}, index) => {
//     block.innerHTML += `
//      <h3>Name: ${name}</h3>
//      <p>Capital: ${capital}</p>
//      <p>Population: ${population}</p> 
//     `
//   }); 
// }
















const loca = window.location.href;
const home = document.querySelector(".Home");
const countries = document.querySelector(".countries");
const card = document.querySelector(".cards");
if (loca === "http://127.0.0.1:5500/page2/cards/cards.html") {
  card.classList.add("active");
} else if (loca === "http://127.0.0.1:5500/page2/profile.html") {
  home.classList.add("active");
}
else if (loca === "http://127.0.0.1:5500/page2/countries/countries.html") {
  countries.classList.add("active");
}

console.log(loca); 
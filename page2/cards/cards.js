const api = "https://fakestoreapi.com/carts";
const userApi = "https://fakestoreapi.com/users";
const tBody = document.querySelector(".t-body");
const cardWrap = document.querySelector(".card");
const Confirm = document.querySelector(".Confirm");
const logout = document.querySelector(".logout");
const block = document.querySelector(".card-wrapper");
let user1,
  user2,
  user3,
  user4,
  user5,
  rabbit,
  count1 = 4,
  count2 = 4,
  count3 = 2,
  count4 = 4,
  count5 = 1,
  count6 = 2,
  count7 = 1,
  rabbit2;
const Logout = () => {
  localStorage.removeItem("token");
  window.location.href = "../../index.html";
};
logout.addEventListener("click", Logout);
// try {
//   const fet = async (api) => {
//     const request = await axios.get(api);
//     console.log("ishlavotti");
//     singleUser(request.data);
//   };
//   fet(userApi);
// } catch (error) {
//   console.log(error);
// }
fetch(userApi)
  .then((res) => res.json())
  .then((data) => {
    singleUser(data);
  });
function singleUser(data) {
  user1 = data[0].username;
  user2 = data[1].username;
  user3 = data[2].username;
  user4 = data[3].username;
  user5 = data[4].username;
}
fetch(api)
  .then((res) => res.json())
  .then((data) => {
    dataHtml(data);
  });
// {id,userId,date}
function dataHtml(data) {
  data.map(({ date, userId, id, products }, index) => {
    tBody.innerHTML += `
            <tr>
            <td>${id}</td>
            <td>${date}</td>
            <td>${userId}</td>
            <td>${products[0].quantity}</td>
            <td>
            <button onclick = "showCard(${id})" class="view">view</button>
            <button onclick = "deleteData(${id})" class="delete">delete</button>
            </td>
        </tr>`;
  });
}
function showCard(id) {
  block.classList.remove("none");
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { title, image, price, category } = data;
      if (id == 1) {
        rabbit = user1;
        rabbit2 = count1;
      } else if (id == 2) {
        rabbit = user1;
        rabbit2 = count2;
      } else if (id == 3) {
        rabbit = user2;
        rabbit2 = count3;
      } else if (id == 4) {
        rabbit = user3;
        rabbit2 = count4;
      } else if (id == 5) {
        rabbit = user3;
        rabbit2 = count5;
      } else if (id == 6) {
        rabbit = user4;
        rabbit2 = count6;
      } else if (id == 7) {
        rabbit = user5;
        rabbit2 = count7;
      }
      cardWrap.innerHTML = `
        <img class ="image" src="${image}" width="160px" alt="${title}">
        <h2 class="userh">${title}</h2>
        <p class="userp">${category}</p>
        <p class="userp">Price: ${price}$</p>
        <div class="user">
          <p class="userp">User: ${rabbit}</p>
          <p class="userp">Total price: ${price}$ * ${rabbit2} =  ${
        price * rabbit2
      }$</p>
        </div>
        <button onclick = "show()" class="Cancel">Cancel</button>
      `;
    });
}
function show() {
  block.classList.add("none");
}
function deleteData(id) {
  fetch(`https://fakestoreapi.com/carts/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert(`you successful deleted item ${id}`);
      }
      console.log(data);
    });
}
const loca = window.location.href;
const home = document.querySelector(".Home");
const countries = document.querySelector(".countries");
const card = document.querySelector(".cards");
if (loca === "http://127.0.0.1:5500/page2/cards/cards.html") {
  card.classList.add("active");
} else if (loca === "http://127.0.0.1:5500/page2/profile.html") {
  home.classList.add("active");
} else if (loca === "http://127.0.0.1:5500/page2/countries/countries.html") {
  countries.classList.add("active");
}

console.log(loca);

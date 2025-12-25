let idedit;
let tit;
let pri;
let des;
let cat;
let img;
const Confirm = document.querySelector(".Confirm");
const logout = document.querySelector(".logout");
const Logout = () => {
  localStorage.removeItem("token");
  window.location.href = "../index.html";
};
logout.addEventListener("click", Logout);
const api = "https://fakestoreapi.com/products";
const tBody = document.querySelector(".t-body");
fetch(api)
  .then((res) => res.json())
  .then((product) => {
    innerData(product);
  });
function innerData(product) {
  product.map(({ id, title, price, description, category, image }, index) => {
    tBody.innerHTML += `
      <tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>${category}</td>
        <td>${description}</td>
        <td>${price}$</td>
        <td>
          <img width ="70" heigh ="70" src="${image}" alt="${title}">
        </td>
        <td>
          <button class="view">view</button>
          <button onclick = "editpro(${id})"  class="edit">edit</button>
          <button onclick = "deletePoduct(${id})" class="delete">delete</button>
        </td>
      </tr>`;
    unic(title, price, category, description, image);
  });
}

//delete

function deletePoduct(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
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
const addproduct = document.querySelector(".addbtn");
const form = document.querySelector(".form2");
const modal = document.querySelector(".modal");
const cancel = document.querySelector(".Cancel");
addproduct.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.toggle("none");
});

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.toggle("none");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form["title"].value.trim();
  const price = form["price"].value.trim();
  const des = form["description"].value.trim();
  const category = form["category"].value.trim();
  const img = form["image"].value.trim();

  const product = {
    title,
    price,
    des,
    category,
    img,
  };
  fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      tBody.innerHTML += `
      <tr>
        <td>:)</td>
        <td>${title}</td>
        <td>${category}</td>
        <td>${des}</td>
        <td>${price}$</td>
        <td>
          <img width ="100" heigh ="100" src="${img}" alt="${title}">
        </td>
        <td>
          <button class="view">view</button>
          <button class="edit">edit</button>
          <button class="delete">delete</button>
        </td>
      </tr>`;
      alert("successful added");
      console.log(data);
    });
  // title.innerHTML = "";
  // category.innerHTML = "";
  // des.innerHTML = "";
  // price.innerHTML = "";
  // img.innerHTML = "";
  modal.classList.toggle("none");
});

function unic(title, price, category, description, image) {
  tit = title;
  pri = price;
  des = category;
  cat = description;
  img = image;
}

const edit = document.querySelector(".Edit");
const editform = document.querySelector(".formEdit");
function editpro(id) {
  // unic()
  edit.classList.toggle("none");

  // let t = editform["title"];
  // let p = editform["price"];
  // let d = editform["description"];
  // let c = editform["category"];
  // let i = editform["image"];
  // t.value.innerHTML = `${tit}`;
  // p.value.innerHTML = `${pri}`;
  // d.value.innerHTML = `${des}`;
  // c.value.innerHTML = `${cat}`;
  // i.value.innerHTML = `${img}`;

  idedit = id;
}
editform.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = editform["title"].value.trim();
  const price = editform["price"].value.trim();
  const des = editform["description"].value.trim();
  const category = editform["category"].value.trim();
  const img = editform["image"].value.trim();

  const pro = {
    title,
    img,
    price,
    des,
    category,
  };
  fetch(`https://fakestoreapi.com/products/${idedit}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pro),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      edit.classList.toggle("none");
      alert("successful edited")
    });
});



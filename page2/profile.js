let idedit;
let tit;
let pri;
let des;
let cat;
let img;
const Confirm = document.querySelector(".Confirm");
const logout = document.querySelector(".logout");
const deletePoduct = async (id) => {
  const thing = await axios.delete(`https://fakestoreapi.com/products/${id}`);
  if (thing.data) {
    alert(`you successful deleted item ${id}`);
  }
  console.log(thing.data);
  // fetch(`https://fakestoreapi.com/products/${id}`, {
  //   method: "DELETE",
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data) {
  //       alert(`you successful deleted item ${id}`);
  //     }
  //     console.log(data);
  //   });
};
const Logout = () => {
  localStorage.removeItem("token");
  window.location.href = "../index.html";
};
logout.addEventListener("click", Logout);
const api = "https://fakestoreapi.com/products";
const tBody = document.querySelector(".t-body");
// fetch(api)
//   .then((res) => res.json())
//   .then((product) => {
//     innerData(product);
//   });
try {
  const Data = async (api) => {
    const request = await axios.get(api);
    innerData(request.data);
  };
  Data(api);
} catch (error) {
  console.log(error);
}

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
  try {
    const axi = async (api) => {
      const one = await axios.post(api);
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
    };
    axi(api);
    // fetch(api, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(product),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //   tBody.innerHTML += `
    // <tr>
    //   <td>:)</td>
    //   <td>${title}</td>
    //   <td>${category}</td>
    //   <td>${des}</td>
    //   <td>${price}$</td>
    //   <td>
    //     <img width ="100" heigh ="100" src="${img}" alt="${title}">
    //   </td>
    //   <td>
    //     <button class="view">view</button>
    //     <button class="edit">edit</button>
    //     <button class="delete">delete</button>
    //   </td>
    // </tr>`;
    //   alert("successful added");
    //   console.log(data);
    //   });
  } catch (error) {
    console.log(error);
  }
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
  try {
    const ed = async (api) => {
      const bro = await axios.put(api);
      console.log(bro.data);
      edit.classList.toggle("none");
      alert(`successful edited ${idedit}`);
    };
    ed(`https://fakestoreapi.com/products/${idedit}`);
  } catch (error) {
    console.log(error);
  }
  //   fetch(`https://fakestoreapi.com/products/${idedit}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(pro),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       edit.classList.toggle("none");
  //       alert("successful edited");
  //     });
});
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

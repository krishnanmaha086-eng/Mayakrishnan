async function getData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    let cardFeatures = document.querySelector(".features-products");

    data.forEach(data => {
        let cardContainer = document.createElement("div");
        cardContainer.className = "card";
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        let cardHeader = document.createElement("div");
        cardHeader.className = "card-header";

        cardContainer.dataset.image = data.image;
        cardContainer.dataset.title = data.title;
        cardContainer.dataset.price = data.price;
        cardContainer.dataset.rating = data.rating;
        cardHeader.innerHTML = `<img src = ${data.image} alt="Image">`;
        cardBody.innerHTML = `
        <h3>${data.title}</h3>
        <p>Rating : ${data.rating.rate}</p>
        <p>Price : ₹${data.price}</p>
        <button class="addtocart">Add To Cart</button>
        <a class="view" href="view.html">View</a>
        `;

        cardContainer.appendChild(cardHeader)
        cardContainer.appendChild(cardBody)
        cardFeatures.appendChild(cardContainer);
    })

    let count = 0;
    let cartCount = document.querySelector(".cart-count");
    let addToCart = document.querySelectorAll(".addtocart");
    addToCart.forEach(button => {
        button.addEventListener('click', function () {
            count++;
            cartCount.innerText = count;
        })
    })

    // let view = document.querySelectorAll(".view");
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("view")) {
            let product = e.target.closest(".card");

            let title = product.dataset.title;
            let price = product.dataset.price;
            let rating = product.dataset.rating;
            let image = product.dataset.image;

            let viewProduct = [
                {
                    title: title,
                    price: price,
                    rating: rating,
                    image: image
                }
            ]

            localStorage.setItem("viewProduct", JSON.stringify(viewProduct));

            viewProduct = JSON.parse(localStorage.getItem("viewProduct")) || [];
        }
    })
}
getData();

async function bigSaleData() {
    let response = await fetch("https://fakestoreapi.com/products?limit=4");
    let data = await response.json();

    let bigSale = document.querySelector(".big-sale");

    data.forEach(data => {
        let bigSaleContainer = document.createElement("div");
        bigSaleContainer.className = "card";
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        let cardHeader = document.createElement("div");
        cardHeader.className = "card-header";
        cardHeader.innerHTML = `<img src = ${data.image} alt="Image">`;
        cardBody.innerHTML = `
        <h3>${data.title}</h3>
        <p>Rating : ${data.rating.rate}</p>
        <p>Price : ₹${data.price}</p>
        <button class="addtocart">Add To Cart</button>
        <a class="view" href="view.html">View</a>
        `;

        bigSaleContainer.appendChild(cardHeader)
        bigSaleContainer.appendChild(cardBody)
        bigSale.appendChild(bigSaleContainer);
    })

    let count = 0;
    let cartCount = document.querySelector(".cart-count");
    let addToCart = document.querySelectorAll(".addtocart");
    addToCart.forEach(button => {
        button.addEventListener('click', function () {
            count++;
            cartCount.innerText = count;
        })
    })

    // let view = document.querySelectorAll(".view");
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("view")) {
            let product = e.target.closest(".card");

            let title = product.dataset.title;
            let price = product.dataset.price;
            let rating = product.dataset.rating;
            let image = product.dataset.image;

            let viewProduct = [
                {
                    title: title,
                    price: price,
                    rating: rating,
                    image: image
                }
            ]

            localStorage.setItem("viewProduct", JSON.stringify(viewProduct));

            viewProduct = JSON.parse(localStorage.getItem("viewProduct")) || [];
        }
    })
}
bigSaleData();

async function trendingProduct() {
    let response = await fetch('https://fakestoreapi.com/products?limit=6');
    let data = await response.json();

    let trendingContainer = document.querySelector(".trending-product");

    data.forEach(data => {
        let trendContainer = document.createElement("div");
        trendContainer.className = "card";
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        let cardHeader = document.createElement("div");
        cardHeader.className = "card-header";
        cardHeader.innerHTML = `<img src = ${data.image} alt="Image">`;
        cardBody.innerHTML = `
        <h3>${data.title}</h3>
        <p>Rating : ${data.rating.rate}</p>
        <p>Price : ₹${data.price}</p>
        <button class="addtocart">Add To Cart</button>
        <a class="view" href="view.html">View</a>
        `;

        trendContainer.appendChild(cardHeader)
        trendContainer.appendChild(cardBody)
        trendingContainer.appendChild(trendContainer);
    })

    let count = 0;
    let cartCount = document.querySelector(".cart-count");
    let addToCart = document.querySelectorAll(".addtocart");
    addToCart.forEach(button => {
        button.addEventListener('click', function () {
            count++;
            cartCount.innerText = count;
        })
    })

    // let view = document.querySelectorAll(".view");
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("view")) {
            let product = e.target.closest(".card");

            let title = product.dataset.title;
            let price = product.dataset.price;
            let rating = product.dataset.rating;
            let image = product.dataset.image;

            let viewProduct = [
                {
                    title: title,
                    price: price,
                    rating: rating,
                    image: image
                }
            ]

            localStorage.setItem("viewProduct", JSON.stringify(viewProduct));

            viewProduct = JSON.parse(localStorage.getItem("viewProduct")) || [];
        }
    })
}

trendingProduct();


let searchInput = document.querySelector('.search-icon');

searchInput.addEventListener("input", function () {
    searchValue = searchInput.value.toLowerCase();

    let products = document.querySelectorAll(".card");
    products.forEach(product => {
        let title = (product.dataset.title || "").toLowerCase();

        if (title.includes(searchValue)) {
            product.style.display = "block"
        }
        else {
            product.style.display = "none";
        }
    })
})

//login-page

let closeIcon = document.querySelector("#close");
let loginPage = document.querySelector(".login-page");
loginPage.style.display = "none";

let loginIcon = document.querySelector(".login-icon");

loginIcon.addEventListener("click", function () {
    if (loginPage.style.display === "none") {
        loginPage.style.display = "block";
    }
    else {
        loginPage.style.display = "none";
    }
})

closeIcon.addEventListener("click", function () {
    loginPage.style.display = "none";
})

let detail = JSON.parse(localStorage.getItem("Details")) || [];
let inputElement = document.querySelector("#email");
let password = document.querySelector("#password");
var btn = document.querySelector(".login-btn");

let currentuser = [];

btn.addEventListener("click", function (e) {
    e.preventDefault();

    let inputValue = inputElement.value;
    let passwordValue = password.value;
    console.log(inputValue);
    console.log(passwordValue);

    let user = detail.find(function (e) {
        return (e.email === inputValue && e.password === passwordValue);
    })

    if (!user) {
        alert("Invalid Email");
        return;
    }

    currentuser.push({
        name: user.name,
        email: user.email
    })
    // saveData();
    localStorage.setItem("currentUser", JSON.stringify(currentuser));

    inputElement.value = "";
    password.value = "";
})

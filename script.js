async function getProducts() {
    let response = await fetch("items.json")
    let products = await response.json()
    return products
}
function getCardHTML(product){
    let productData = JSON.stringify(product)
    return `
    <div class="product">
                <img src="img/${product.image}" alt="">
                <p class="name">${product.title}</p>
                <p class="price">${product.price}₴</p>
                
                <a href="" class="buy">в корзину</a>
            </div>
        `
}
function buyItem() {
    console.log("Купив")
}
getProducts().then(function(products){
    let productsList = document.querySelector(".catalog")
    if (productsList){
        products.forEach(product => {
            productsList.innerHTML += getCardHTML(product)

        });
            
        }
        let buyButtons = document.querySelectorAll(".buy")
        if (buyButtons){
            buyButtons.forEach(button=>{
            button.addEventListener('click', buyItem)
        })
    }
})














function searchProducts(event) {
    event.preventDefault(); // Забороняє перезавантаження сторінки при відправці форми

    let query = document.querySelector('.form_input').value.toLowerCase();

    let productsList = document.querySelector('.catalog');

    productsList.innerHTML = ''; // Очищаємо список товарів

    // Відображаємо товари на сторінці
    getProducts().then(function (products) {
        let productsList = document.querySelector('.catalog');
        products.forEach(function (product) {
            let name = product.title.toLowerCase()
            console.log(name)
            if (name.includes(query)) {
                productsList.innerHTML += getCardHTML(product);
            }
        });

        // Отримуємо всі кнопки "Купити" на сторінці
        // let buyButtons = document.querySelectorAll('.buy');
        // Додаємо обробник подій на кожну кнопку "Купити"
        // if (buyButtons) {
        //     buyButtons.forEach(function (button) {
        //         button.addEventListener('click', addToCart);
        //     });
        // }
    });
}
let searchForm = document.querySelector('.form_btn')
console.log(searchForm)
searchForm.addEventListener('click',searchProducts);


let form_btn = document.querySelector('.search_link')
let form_bts = document.querySelector('.form')
let form_text = document.querySelector('.ban_text')

form_btn.addEventListener('click', function(){
    event.preventDefault(); 
    form_text.classList.toggle('dn')
    form_bts.classList.toggle('dn')
})
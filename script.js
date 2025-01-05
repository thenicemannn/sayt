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
                <p class="price">${product.title}</p>
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


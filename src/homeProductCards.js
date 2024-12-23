import { homeQuanityToggle } from "./quanityToggle";
let productContainer = document.getElementById('productContainer');
let productTemplate = document.getElementById('productTemplate');

export function allProduct(products){
    products.forEach((items)=>{
        const {id,name,category,brand,price,stock,description,image} = items;

        const productCardClone = document.importNode(productTemplate.content, true)

        productCardClone.getElementById('cardValue').setAttribute("id", `card${id}`)

        productCardClone.querySelector('.category').innerText =category;
        productCardClone.querySelector('.productImage').src = image;
        productCardClone.querySelector('.productName').innerText = name;
        productCardClone.querySelector('.productDescription').innerText = description;
        productCardClone.querySelector('.productPrice').innerText = '₹'+price;
        productCardClone.querySelector('.productActualPrice').innerText = '₹'+price*4;
        productCardClone.querySelector('.productProperty').innerText = `Total Stocks Available: ${stock}`;

        productCardClone.querySelector('.stockElement').addEventListener('click',(event)=>{
            homeQuanityToggle(event, id, stock)
        })

        productContainer.append(productCardClone)
    })
}

export function homeQuanityToggle(event, id, stock){
    const cardProducts = document.querySelector(`#card${id}`);
    let productQunanity = cardProducts.querySelector('.productQuantity');
    let qunanity = parseInt(productQunanity.getAttribute('data-quanity')) || 1;

    if(event.target.className == 'cartIncrement'){
        if(qunanity < stock){
            qunanity += 1;
        } else if(qunanity == stock){
            qunanity = stock;
        }
    }

    if(event.target.className == 'cartDecrement'){
        if(qunanity > 1){
            qunanity -= 1;
        }
    }
    productQunanity.innerText = qunanity;
    productQunanity.setAttribute('data-quanity', qunanity);
    return qunanity;

}
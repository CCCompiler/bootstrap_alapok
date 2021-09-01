function calcAmount(){
    let price = 1200;
    let amountNumber = parseInt(document.querySelector("input[name='amount-input']").value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
}

function showSumPrice(pricePerProduct=1200, amountNumber=1){
    
    if(amountNumber > 10){
        alert("Maximum 10 terméket vásárolhat!");
    }else if(amountNumber < 1){
        alert("Minimum 1 terméket kell vásárolnia!");
    }else{
        let amount = amountNumber * pricePerProduct;
        document.querySelector("span.show-amount").innerHTML = amount;
        }
}
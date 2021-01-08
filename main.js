//Count price monthly/annualy
function countPrice() {
const checkBox = document.getElementById("checkbox");
const prices = document.getElementsByClassName("price"); 
for (let i = 0; i < prices.length; i++) {
  let price = Number(prices[i].textContent);
    if (checkBox.checked){
      price = Math.round(price/10)- 0.01;
      prices[i].textContent = price;
  } else {
      price = Math.round(price*10)- 0.01;
      prices[i].textContent = price;
    }
  }
}

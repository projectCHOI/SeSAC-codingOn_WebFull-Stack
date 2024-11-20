function goMart() {
  console.log("마트에 갑니다.");
}

function pickDrink(callback) {
  setTimeout(function () {
    console.log("고민 끝~");
    product = "콜라";
    price = 1500;
    callback(); // 선택이 끝난 후 pay 호출
  }, 3000);
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price}지불`);
}

let price, product;
goMart();
pickDrink(pay); // pay를 콜백으로 전달

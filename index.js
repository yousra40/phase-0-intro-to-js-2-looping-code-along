const gifts = ["teddy bear", "drone", "dol"];

function writeCards(arr, event) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const msg = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
    newArray.push(msg);
  }
  return newArray;
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function wrapGifts(gifts) {
  let i = 0;
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow`);
    i++;
  }
  return gifts;
}
wrapGifts(gifts);
function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}
countDown(10);

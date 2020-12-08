export default function CalculatePrice(id) {
  let price = parseInt(id.toString().slice(0, 2), 10);
  price = price > 60 ? price / 2 : price;
  return price + 0.99;
}

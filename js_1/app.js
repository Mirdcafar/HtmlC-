let ValuteName = prompt("Write valute name")
let price = +prompt("Write price number")

switch (ValuteName) {
    case 'azn':
        var allPrice = price * 1.7
        alert("AZN " + allPrice)
        break;
    case 'usd':
        var allPrice = price / 1.7
        alert("USD " + allPrice)
        break;
    default:
        break;
}
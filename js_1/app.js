let ValuteName = prompt("Write valute name")
let price = +prompt("Write price number")

switch (ValuteName) {
    case 'azn':
        console.log(price * 1.7);
        break;
    case 'usd':
        console.log(price / 1.7);
        break;

    default:
        break;
}
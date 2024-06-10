let key = '0fbcffaadcddd020d1db273e319e9c3b';

let countryName = prompt("Pleace write country name")

async function main() {
    const url = `https://api.openweathermap.org/data/3.0/onecall?exclude=${countryName}&appid=${key}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data.lon);

}

main();


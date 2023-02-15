/*
const lotus = {
    name: 'Nelumbo nucifera', 
    botany: 'Pond or river bottom soil',
    symbol: 'Purity'
}


document.querySelector(".flower #title").innerHTML = lotus.name;
document.querySelector(".flower #botany").innerHTML = lotus.botany;
document.querySelector(".flower #symbol").innerHTML = lotus.symbol;


const title_ = `
<p id="title">
<span class="title-name">Name: </span>
<span class="title-value"${lotus.name}</span>
</p>
`;

document.querySelector(".flower #title").innerHTML = title_;
*/

const lotus = {
    title: 'Nelumbo nucifera', 
    botany: 'Pond or river bottom soil',
    symbol: 'Purity'
}

let title = document.querySelector("#title").innerHTML = `<span>Title: </span><span>${lotus.title}</span>`

let botany = document.querySelector("#botany").innerHTML = `<span>Botany: </span><span>${lotus.botany}</span>`

let symbol = document.querySelector("#symbol").innerHTML = `Symbol: ${lotus.symbol}`

const plumeria = {
    title_p: 'Plumeria',
    botany_p: 'Full sun, well-drained soil',
    symbol_p: 'Love'
}

let title_p = document.querySelector("#title-p").innerHTML = `Title: ${plumeria.title_p}`

let botany_p = document.querySelector("#botany-p").innerHTML = `Botany: ${plumeria.botany_p}`

let symbol_p = document.querySelector("#symbol-p").innerHTML = `Symbol: ${plumeria.symbol_p}`

const lily = {
    title_l: 'Zantedeschia',
    botany_l: 'Marshy areas',
    symbol_l: 'Love'
}

let title_l = document.querySelector("#title-l").innerHTML = `Title: ${lily.title_l}`

let botany_l = document.querySelector("#botany-l").innerHTML = `Botany: ${lily.botany_l}`

let symbol_l = document.querySelector("#symbol-l").innerHTML = `Symbol: ${lily.symbol_l}`
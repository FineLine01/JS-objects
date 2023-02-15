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
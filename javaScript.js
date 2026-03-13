const convertButton = document.querySelector(".convert-button"); // pega o botão
const currencyFromSelect = document.getElementById("currency-from"); // pega o select
const currencyToSelect = document.querySelector(".currency-select"); // pega o select
const inputValue = document.querySelector(".input-currency");   // pega o input
const currencyValueToConvert = document.querySelector(".moeda-valor-convertido"); // pega o paragrafo
const currencyValue = document.querySelector(".moeda-valor"); // pega o paragrafo
const currencyFromName = document.getElementById("currency-from-name"); // pega o paragrafo
const currencyName = document.getElementById("currency-name"); // pega o paragrafo
const currencyImg = document.querySelector(".currency-img"); // pega a imagem
const currencyFromImg = document.querySelector(".moeda img") // pega a imagem

// Taxas de câmbio fixas (apenas exemplo)
const exchangeRates = {
    BRL: { USD: 5.25, EUR: 6.04, GBP: 6.96, BTC: 0.0000027, CHF: 6.68, BRL: 1 },
    USD: { BRL: 5.25, EUR: 0.87, GBP: 0.75, BTC: 0.000014, CHF: 0.79, USD: 1 },
    EUR: { BRL: 6.5, USD: 1.15, GBP: 0.86, BTC: 0.000016, CHF: 0.90, EUR: 1 },
    GBP: { BRL: 7.01, USD: 1.34, EUR: 1.16, BTC: 0.000019, CHF: 1.05, GBP: 1 },
    BTC: { BRL: 375882.56, USD: 71643.34, EUR: 62182.73, GBP: 53602.24, CHF: 56258.54, BTC: 1 },
    CHF: { BRL: 6.68, USD: 1.27, EUR: 1.10, GBP: 0.95, BTC: 0.000018, CHF: 1 },
};

// Nomes e imagens para cada moeda
const currencyNames = { // pega o paragrafo
    BRL: "Real Brasileiro",
    USD: "Dólar Americano",
    EUR: "Euro",
    GBP: "Libra",
    BTC: "Bitcoin",
    CHF: "Franco Suíço",
};

const currencyImages = { // pega a imagem
    BRL: "./img/real.png",
    USD: "./img/dolar.png",
    EUR: "./img/euro.png",
    GBP: "./img/librapq.png",
    BTC: "./img/bitcoinpq.png",
    CHF: "./img/francosuicopq.png",
};

function convertValues() { // Função para converter
    const from = currencyFromSelect.value; // pega o select
    const to = currencyToSelect.value; // pega o select
    const value = parseFloat(inputValue.value.replace(",", ".")); // pega o input

    if (isNaN(value)) return alert("Digite um valor válido"); // verifica se o valor digitado é um número

    const rate = exchangeRates[from][to]; // pega a taxa de câmbio
    const converted = value * rate; // converte o valor

    // Atualiza os valores na tela
    currencyValueToConvert.innerText = new Intl.NumberFormat("pt-BR", { style: "currency", currency: from }).format(value); // Atualiza o paragrafo
    currencyValue.innerText = new Intl.NumberFormat("en-US", { style: "currency", currency: to }).format(converted); // Atualiza o paragrafo

    // Atualiza o nome e imagem da moeda de origem
    currencyFromName.innerText = currencyNames[from];
    // Atualiza o nome e imagem da moeda de destino
    currencyFromImg.src = currencyImages[from]; // Atualiza o nome e imagem da moeda de origem
    currencyName.innerText = currencyNames[to];
    currencyImg.src = currencyImages[to];
    
}

// Atualiza ao mudar qualquer select
currencyFromSelect.addEventListener("change", convertValues); // quando o select for alterado, ele vai executar essa funcao
currencyToSelect.addEventListener("change", convertValues);
convertButton.addEventListener("click", convertValues);
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
    BRL: { USD: 5.25, EUR: 6.04, GBP: 6.96, BTC: 375882.56, CHF: 6.68, BRL: 1 }, // moeda de origem e as taxas de câmbio
    USD: { BRL: 5.25, EUR: 0.87, GBP: 0.75, BTC: 71643.34, CHF: 0.79, USD: 1 },
    EUR: { BRL: 6.5, USD: 1.15, GBP: 0.86, BTC: 62182.73, CHF: 0.90, EUR: 1 },
    GBP: { BRL: 7.01, USD: 1.34, EUR: 1.16, BTC: 53602.24, CHF: 1.05, GBP: 1 },
    BTC: { BRL: 375882.56, USD: 71643.34, EUR: 62182.73, GBP: 53602.24, CHF: 56258.54, BTC: 1 },
    CHF: { BRL: 6.68, USD: 1.27, EUR: 1.10, GBP: 0.95, BTC: 56258.54, CHF: 1 },
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

    if (isNaN(value)) {

        inputValue.classList.add("input-error")

        alert("Digite um valor válido")

        return
    }

    inputValue.classList.remove("input-error")

    const rate = exchangeRates[from][to]; // pega a taxa de câmbio
    const converted = value * rate; // converte o valor

    // Atualiza os valores na tela
    currencyValueToConvert.innerText = new Intl.NumberFormat("pt-BR", { style: "currency", currency: from }).format(value); // Atualiza o paragrafo
    currencyValue.innerText = new Intl.NumberFormat("en-US", { style: "currency", currency: to }).format(converted); // Atualiza o paragrafo

    // Atualiza o nome da moeda de origem
    currencyFromName.innerText = currencyNames[from];
    currencyFromImg.src = currencyImages[from]; // Atualiza a imagem da moeda de origem
    currencyName.innerText = currencyNames[to]; // Atualiza o nome da moeda de destino
    currencyImg.src = currencyImages[to]; // Atualiza a imagem da moeda de destino

}

// Atualiza ao mudar qualquer select
currencyFromSelect.addEventListener("change", convertValues); // quando o select for alterado, ele vai executar essa funcao
currencyToSelect.addEventListener("change", convertValues);
convertButton.addEventListener("click", convertValues);

inputValue.addEventListener("input", () => {
    inputValue.classList.remove("input-error") // quando o input for alterado, ele vai remove a classe de erro
})
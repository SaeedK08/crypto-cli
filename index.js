const userArgs = process.argv.slice(2);
const coins = userArgs.length === 0 ? ["bitcoin"] : userArgs

async function getCryptoPrice(cryptoName) {
    const urlArgs = cryptoName.length===1 ? cryptoName[0] : cryptoName.join(',')
    try {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${urlArgs}&vs_currencies=usd,sek`;
        console.log(`Getting the price for ${cryptoName}....`);
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`API-Error! Status: ${response.status}`)
        }
        const data = await response.json();
        for (let i = 0; i < cryptoName.length; ++i) {

            if (data[cryptoName[i]]) {
                const priceUSD = data[cryptoName[i]].usd;
                const priceSEK = data[cryptoName[i]].sek;
                console.log(`\n💰 Price for ${cryptoName[i].toUpperCase()}:`);
                console.log(`- ${priceUSD} USD`);
                console.log(`- ${priceSEK} SEK`);
            }
            else {
                console.log(`\nFound no price for  "${cryptoName[i]}". Check spelling or currency.`);
            }
        }
    }
    catch(error) {
        console.error("An error occured when fetching the data. " + error.message);
    }
}

getCryptoPrice(coins)
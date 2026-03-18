# Crypto Price CLI

A simple command-line interface (CLI) tool built with Node.js to fetch real-time cryptocurrency prices in USD and SEK using the public CoinGecko API.

## Prerequisites
- **Node.js**: Make sure you have Node.js installed on your computer (version 18 or higher is required to use the built-in `fetch` API).

## Installation
1. Clone or download this project folder to your local machine.
2. Open your terminal and navigate to the project directory and run for instance: node index.js node index.js bitcoin ethereum dogecoin

## Limitations & Tips
Rate Limiting (Error 429): This tool uses the free version of the CoinGecko API, which has strict rate limits. Do not spam the command. If you run the script too many times in a short period, your IP address will be temporarily blocked (yielding a 429 Too Many Requests error). If this happens, simply wait some miutes before trying again.

Argument Limit: It is highly recommended to search for a maximum of 3 to 4 coins at a time in a single command.

Use Coin IDs, not Tickers: The API requires the internal coin ID rather than the short symbol. For example, you must use ripple instead of xrp, and bitcoin instead of btc.

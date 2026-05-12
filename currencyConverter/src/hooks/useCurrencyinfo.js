const exchangeRates = {
  usd: {
    usd: 1,
    inr: 83.5,
    eur: 0.92,
    gbp: 0.79,
    jpy: 154.2,
    cad: 1.36,
    aud: 1.53,
    chf: 0.9,
    cny: 7.24,
    pkr: 278.5,
    aed: 3.67,
    sar: 3.75,
    sgd: 1.34,
    myr: 4.72,
    bdt: 110.5,
    nzd: 1.63,
    zar: 18.63,
    mxn: 17.15,
    brl: 4.97,
    krw: 1325.0,
  },
};

const usdRates = exchangeRates.usd;
const currencies = Object.keys(usdRates);

currencies.forEach((base) => {
  if (!exchangeRates[base]) exchangeRates[base] = {};
  const baseInUsd = 1 / usdRates[base];
  currencies.forEach((target) => {
    exchangeRates[base][target] = parseFloat(
      (baseInUsd * usdRates[target]).toFixed(6)
    );
  });
});

function useCurrencyInfo(currency) {
  const key = currency.toLowerCase();
  return exchangeRates[key] || {};
}

export default useCurrencyInfo;
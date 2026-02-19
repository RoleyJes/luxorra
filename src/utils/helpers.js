export function formatCurrency(value, localCode = "en-US", currencyCode = "USD") {
  return new Intl.NumberFormat(localCode, {
    style: "currency",
    currency: currencyCode,
  }).format(value);
}

export function formatNumber(value) {
  return value.toLocaleString("en-US");
}

export function getFirstLetter(word) {
  return word.split("")[0].toUpperCase();
}

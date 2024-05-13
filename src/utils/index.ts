export function formatCurrency(number: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

export function toBoolean(str: string) {
  return str.toLowerCase() === "true";
}

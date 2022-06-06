const formatPrice = (price: number): string => {
  const priceWithComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `\u20AC${priceWithComma}`;
};

export { formatPrice };

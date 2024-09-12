export function formatPrice(price: number, decimalPlaces: number = 0): string {
    const fixedPrice = price.toFixed(decimalPlaces);
    const [integerPart, decimalPart] = fixedPrice.split('.');
  
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    return decimalPlaces > 0 ? `${formattedIntegerPart}.${decimalPart}` : `${formattedIntegerPart}`;
  }
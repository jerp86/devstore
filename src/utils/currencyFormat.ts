export const currencyFormat = (value: number, maxDigits = 0) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDigits,
  })
}

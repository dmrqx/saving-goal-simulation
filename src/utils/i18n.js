import { isValidDate } from '@origin/utils/date'

export function formatCurrency ({ amount, currency, locale } = {}) {
  if (isNaN(amount)) return NaN

  const options = {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }

  return new Intl.NumberFormat(locale, options).format(amount)
}

export function formatDate ({ date, format, locale } = {}) {
  return isValidDate(date)
    ? new Intl.DateTimeFormat(locale, format).format(date)
    : new Error('invalid date')
}

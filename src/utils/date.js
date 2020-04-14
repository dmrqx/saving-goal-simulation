export function calculateMonthDiff ([startDate, endDate]) {
  if (!isValidDate(startDate) || !isValidDate(endDate)) return NaN

  const [startMonth, startYear] = [
    startDate.getMonth(),
    startDate.getFullYear()
  ]
  const [endMonth, endYear] = [endDate.getMonth(), endDate.getFullYear()]

  return (endYear - startYear) * 12 + (endMonth - startMonth)
}

export function getNextMonth (date) {
  return isValidDate(date)
    ? new Date(date.getFullYear(), date.getMonth() + 1)
    : new Error('invalid date')
}
export function getPastMonth (date) {
  return isValidDate(date)
    ? new Date(date.getFullYear(), date.getMonth() - 1)
    : new Error('invalid date')
}

export function isDateWithinRange (date, [earliest, latest]) {
  if (
    (earliest !== undefined && !isValidDate(earliest)) ||
    (latest !== undefined && !isValidDate(latest))
  ) {
    return new Error('invalid date')
  }

  const conditions = [
    earliest === undefined || date >= earliest,
    latest === undefined || date <= latest
  ]

  return conditions.every(condition => condition === true)
}

export function isValidDate (date) {
  const isValidDate = date instanceof Date && !isNaN(date.valueOf())

  return isValidDate ? date : false
}

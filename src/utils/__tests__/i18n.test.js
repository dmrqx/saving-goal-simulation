import * as i18nUtils from '@origin/utils/i18n'

describe('i18nUtils', () => {
  describe('formatCurrency', () => {
    const { formatCurrency } = i18nUtils

    it('returns a numeric value formatted as locale specific currency', () => {
      const params = {
        amount: 47.63,
        currency: 'BRL',
        locale: 'pt-BR'
      }

      expect(formatCurrency(params)).toBe('R$47.63')
    })

    it('returns NaN if amount is not a valid integer or float number', () => {
      const params = {
        amount: '47,63',
        currency: 'BLR'
      }

      expect(formatCurrency(params)).toBeNaN()
    })

    it('throws if currency is not specified', () => {
      const params = {
        amount: 47.63
      }

      expect(() => formatCurrency(params)).toThrow(
        'Currency code is required with currency style.'
      )
    })

    it('return an error given no parameters', () => {
      expect(formatCurrency()).toBeNaN()
    })
  })

  describe('formatDate', () => {
    const { formatDate } = i18nUtils

    it('returns a string corresponding to the formatted value of given Date object', () => {
      const params = {
        date: new Date(1789, 6, 14),
        format: { year: 'numeric', month: 'long', day: 'numeric' }
      }

      expect(formatDate(params)).toBe('July 14, 1789')
    })

    it('returns an error if date argument is not a valid Date object', () => {
      const params = {
        date: '1789/7/14',
        format: {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      }

      expect(formatDate(params)).toStrictEqual(new Error('invalid date'))
    })

    it('throws if format options not according to spec', () => {
      const params = {
        date: new Date(1789, 6, 14),
        format: { year: 'short' }
      }

      expect(() => formatDate(params)).toThrowError(
        /Value [\w]* out of range for Intl.DateTimeFormat options property [\w]*./
      )
    })

    it('return an error given no parameters', () => {
      expect(formatDate()).toStrictEqual(new Error('invalid date'))
    })
  })
})

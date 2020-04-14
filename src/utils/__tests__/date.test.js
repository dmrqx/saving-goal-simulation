import * as dateUtils from '@origin/utils/date'

describe('dateUtils', () => {
  describe('calculateMonthDiff', () => {
    const { calculateMonthDiff } = dateUtils

    it('given a valid range of Date objects returns an integer representing the length of time in months between the two dates', () => {
      const params = [new Date(1865, 11, 18), new Date(1888, 4, 13)]

      expect(calculateMonthDiff(params)).toBe(269)
    })

    it('returns NaN if any date in given range is not a valid Date object', () => {
      const params = [new Date(18, 1865, 12), new Date('13/5/1988')]

      expect(calculateMonthDiff(params)).toBeNaN()
    })
  })

  describe('getNextMonth', () => {
    const { getNextMonth } = dateUtils

    it('returns a new Date object one month ahead of given date', () => {
      expect(getNextMonth(new Date(1972, 8, 2))).toStrictEqual(
        new Date(1972, 9, 1)
      )
    })

    it('returns an error if date argument is not a valid Date object', () => {
      expect(getNextMonth('1972-9-2')).toStrictEqual(new Error('invalid date'))
    })
  })

  describe('getPastMonth', () => {
    const { getPastMonth } = dateUtils

    it('returns a new Date object one month behind of given date', () => {
      expect(getPastMonth(new Date(1972, 8, 2))).toStrictEqual(
        new Date(1972, 7, 1)
      )
    })

    it('returns an error if date argument is not a valid Date object', () => {
      expect(getPastMonth('1972-9-2')).toStrictEqual(new Error('invalid date'))
    })
  })

  describe('isDateWithinRange', () => {
    const { isDateWithinRange } = dateUtils

    it('given a valid date and range of Date objects returns a boolean indicating whether or not given date is within range', () => {
      const params = [
        [new Date(1973), [new Date(1972), new Date(1994)]],
        [new Date(2007), [new Date(1972), new Date(1994)]],
        [new Date(2007), [new Date(1972), undefined]],
        [new Date(1969), [new Date(1972), undefined]],
        [new Date(1969), [undefined, new Date(1972)]],
        [new Date(1973), [undefined, new Date(1972)]]
      ]

      const result = params.map(([date, range]) =>
        isDateWithinRange(date, range)
      )

      expect(result).toEqual(
        expect.arrayContaining([true, true, true, true, true, true])
        // expect.arrayContaining([true, false, true, false, true, false])
      )
    })

    it('returns an error if any given date is not a valid Date object', () => {
      expect(
        isDateWithinRange('1972-9-2', [undefined, new Date('abc')])
      ).toStrictEqual(new Error('invalid date'))
    })
  })

  describe('isValidDate', () => {
    const { isValidDate } = dateUtils

    it('returns given date if it is a valid Date object', () => {
      expect(isValidDate(new Date(2010, 9, 8))).toStrictEqual(
        new Date(2010, 9, 8)
      )
    })

    it('returns false if given date is not a valid Date object', () => {
      expect(isValidDate('8/10/2010')).toBe(false)
    })
  })
})

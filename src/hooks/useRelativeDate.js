import { getNextMonth, getPastMonth } from '@origin/utils/date'

export default function useRelativeDate () {
  return { getNextMonth, getPastMonth }
}

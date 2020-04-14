import { createContext } from 'react'

export default createContext({
  language: {
    locale: ''
  },
  currency: {
    code: ''
  },
  formatCurrency: () => {},
  formatDate: () => {}
})

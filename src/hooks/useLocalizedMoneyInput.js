import React, { useContext } from 'react'

import { I18nContext } from '@origin/components/contexts'
import { MoneyInput } from '@origin/components/ui/Input'

export default function useLocalizedMoneyInput ({ ...props }) {
  const { formatCurrency } = useContext(I18nContext)

  const currencyRegex = /^$|(^[1-9]{1}[0-9]{0,2}(,\d{3})*(\.\d{0,2})?$)/

  function formatInputValue (value) {
    const decimalChar = value.endsWith('.') ? '.' : ''
    const strippedValue = value.replace(/[^\d.]/g, '')
    const formattedValue =
      `${formatCurrency(
        strippedValue.endsWith('.')
          ? strippedValue.replace(/\./, '')
          : strippedValue
      )}`.substring(1) + decimalChar

    return [strippedValue, formattedValue !== '0' ? `${formattedValue}` : '']
  }

  return (
    <MoneyInput
      formatter={formatInputValue}
      validationRegex={currencyRegex}
      {...props}
    />
  )
}

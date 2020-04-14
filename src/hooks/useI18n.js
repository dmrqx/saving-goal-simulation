import { useState } from 'react'

import * as i18nUtils from '@origin/utils/i18n'

export default function useI18n ({ ...config }) {
  const [i18n, setI18nOptions] = useState(config)

  return {
    options: { ...i18n },
    formatCurrency: (
      amount,
      currency = i18n.currency.code,
      locale = i18n.language.locale
    ) =>
      i18nUtils.formatCurrency({
        amount,
        currency,
        locale
      }),
    formatDate: (date, format, locale = i18n.language.locale) =>
      i18nUtils.formatDate({
        date,
        format,
        locale
      }),
    setI18nOptions: options =>
      setI18nOptions(prevOptions => ({ ...prevOptions, ...options }))
  }
}

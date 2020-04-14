import React from 'react'
import { node } from 'prop-types'

import { I18nContext } from '@origin/components/contexts'
import { useI18n } from '@origin/hooks'

const propTypes = {
  children: node.isRequired
}

export default function I18nProvider ({ children }) {
  const i18nConfig = process.env.I18N_SETTINGS || {
    language: {
      locale: 'en-US'
    },
    currency: {
      code: 'USD'
    }
  }

  const value = useI18n({ ...i18nConfig })

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

I18nProvider.propTypes = propTypes

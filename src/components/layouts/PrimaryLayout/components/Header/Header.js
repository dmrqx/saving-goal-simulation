import React from 'react'

import { OriginLogo } from '@origin/components/ui'
import './Header.module.css'

export default function Header () {
  return (
    <header styleName='site-header__primary' role='banner'>
      <div>
        <OriginLogo styleName='origin-logo' />
      </div>
    </header>
  )
}

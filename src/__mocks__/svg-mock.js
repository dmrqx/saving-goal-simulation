import React from 'react'

export default function SvgMock ({ ...props }) {
  return <svg {...props} aria-hidden='true' role='img' />
}

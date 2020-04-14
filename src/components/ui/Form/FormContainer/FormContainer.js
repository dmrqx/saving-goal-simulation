import React from 'react'
import { element } from 'prop-types'

import { useFormReducer } from '@origin/hooks'

const propTypes = {
  children: element.isRequired
}

export default function FormContainer (
  FormComponent,
  { initialState, onChange, ...props }
) {
  const [state, dispatch] = useFormReducer(initialState)

  return (
    <form {...props}>
      <FormComponent state={state} dispatch={dispatch} onChange={onChange} />
    </form>
  )
}

FormContainer.propTypes = propTypes

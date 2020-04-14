import { useReducer } from 'react'

export default function useFormReducer (initialState, init) {
  function formReducer (state, action) {
    switch (action.type) {
      case 'init':
        return init(action.payload)
      default:
        return { ...state, ...action.payload }
    }
  }

  return useReducer(formReducer, initialState, init)
}

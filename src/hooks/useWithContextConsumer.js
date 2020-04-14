import React, { Component as ReactComponent } from 'react'

export default function useWithContextConsumer (Component, Context) {
  class ConsumerComponent extends ReactComponent {
    static contextType = Context

    render () {
      return <Component context={this.context} />
    }
  }

  return props => <ConsumerComponent {...props} />
}

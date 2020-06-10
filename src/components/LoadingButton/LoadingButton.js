import React, { Component } from 'react'
import { Button, Spinner } from 'react-bootstrap'

export default class LoadingButton extends Component {
  
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        <Button variant={this.props.variant} disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">Loading...</span>
        </Button>{' '}
        <Button variant={this.props.variant} disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
            Loading...
        </Button>
      </div>
    )
  }
}

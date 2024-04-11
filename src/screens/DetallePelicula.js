import React, { Component } from 'react'

class DetallePelicula extends Component {
    constructor(props){
        super(props)
    }
  render() {
    let id = this.props.match.params.id
    return (
      <div>Detail of {id}</div>
    )
  }
}

export default DetallePelicula;


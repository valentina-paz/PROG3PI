import React, { Component } from 'react'
import SearchResultContainer from '../components/SearchResultContainer/SearchResultContainer'

export default class ResultadoBusqueda extends Component {
  constructor(props) {
    super(props)
    this.state = {
      busqueda: []
    }
  }
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.resultadosBusqueda}&api_key=fa2e1f3d35f9c24f149ede55b3cf6a06`)
      .then(resp => resp.json())
      .then(data => { 
        this.setState({
          busqueda: data.results,
        })
      })
      .catch(err => console.log(err))
      console.log(this.props.match.params.resultadosBusqueda)
  }


  render() {
    return (
      this.state.busqueda.length !== 0 ?
        <section>
          <h2>Resultados para: {this.props.match.params.resultadosBusqueda}</h2> 
          <SearchResultContainer peliBuscada={this.state.busqueda} />
        </section>
        :
        <h2>No se encontraron resultados para: {this.props.match.params.resultadosBusqueda}</h2>
    )
  }
}

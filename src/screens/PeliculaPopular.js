import React, { Component } from 'react'
import FormFiltro from '../components/FormFiltro/FormFiltro'
import ContenedorPeliPopular from '../components/ContenedorPeliPopular/ContenedorPeliPopular'
let pelisPopularesUrl= 'https://api.themoviedb.org/3/movie/popular?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06'


class PeliculaPopular extends Component {
  constructor (props){
    super (props)
    this.state = {
      peliculas: [],
      backup: [],
      page:0
    }
  }

  componentDidMount(){
    fetch(pelisPopularesUrl)
      .then(resp => resp.json())
      .then(data => { 
        this.setState({
          peliculas: data.results,
          backup: data.results,
          page: this.state.page + 1
        })
      })
      .catch(err => console.log(err))
  }
  traerMasPeliculas() {
    fetch(`${pelisPopularesUrl}&page=${(this.state.page + 1)}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        page: this.state.page + 1,
        peliculas: this.state.peliculas.concat(data.results),
        backup: this.state.peliculas.concat(data.results)
      }))
      .catch(err => console.log(err))

  }

  filtrarPeliculas(valorInput) {
    let peliculasFiltradas = this.state.backup.filter(
      (elm) => elm.title.toLowerCase().includes(valorInput.toLowerCase()))
    this.setState({
      peliculas: peliculasFiltradas
    })
  }
  render() {
  
      return (
      <div>
      <FormFiltro
        filtrarPeliculas={(valorInput) => this.filtrarPeliculas(valorInput)} />
      <ContenedorPeliPopular pelisPopulares={this.state.peliculas} />
      <div>
        <button onClick={() => this.traerMasPeliculas()}>
          Mas peliculas
        </button>
      </div>
    </div>
    )
  }
}

export default PeliculaPopular
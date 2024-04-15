import React, { Component } from 'react'
import ContenedorPeliCartel from '../components/ContenedorPeliCartel/ContenedorPeliCartel'
import FormFiltro from '../components/FormFiltro/FormFiltro'
let pelisCarteleraUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06'


class PeliculaCartelera extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peliculas: [],
      backup: [],
      page: 0
    }
  }

  componentDidMount() {
    fetch(pelisCarteleraUrl)
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
    fetch(`${pelisCarteleraUrl}&page=${(this.state.page + 1)}`)
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
          <h1 className='titulos'>PELICULAS EN CARTELERA</h1>
          <ContenedorPeliCartel pelisCartelera={this.state.peliculas} />
        <div>
          <button onClick={() => this.traerMasPeliculas()}>
            Mas peliculas
          </button>
        </div>
      </div>
    )
  }
}

export default PeliculaCartelera


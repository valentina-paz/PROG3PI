import React, { Component } from 'react'
import ContenedorPeliCartel from '../components/ContenedorPeliCartel/ContenedorPeliCartel'
import ContenedorPeliPopular from '../components/ContenedorPeliPopular/ContenedorPeliPopular'
import FormBusqueda from '../components/FormBusqueda/FormBusqueda'
let pelisCarteleraUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06'
let pelisPopularesUrl= 'https://api.themoviedb.org/3/movie/popular?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      peliculas: [],
      peliculasPopulares: [],
      todasLasPelis: []
    }
  }
  componentDidMount() {
    fetch(pelisCarteleraUrl)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          peliculas: data.results.splice(0,5),
        })
      })
      .catch(err => console.log(err))

    fetch(pelisPopularesUrl)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          peliculasPopulares: data.results.splice(0,5),
        })
      })
      .catch(err => console.log(err))
  this.setState({
    todasLasPelis: this.state.peliculas + this.state.peliculasPopulares
  })
  console.log(this.state.todasLasPelis)
  }
  filtrarPeliculas(valorInput){
    let peliculasFiltradas= this.state.peliculas.concat(this.state.peliculasPopulares).filter((elm)=> elm.title.toLowerCase().includes(valorInput.toLowerCase()))
    this.setState({
      todasLasPelis: peliculasFiltradas
    })
  }

  render() {
    return (
      <React.Fragment>
      <FormBusqueda 
        filtrarPeliculas={(valorInput) => this.filtrarPeliculas(valorInput)}
      />
      <h2> PELICULAS EN CARTELERA</h2>
      <ContenedorPeliCartel pelisCartelera={this.state.peliculas} />
      <h2> PELICULAS POPULARES </h2>
      <ContenedorPeliPopular pelisPopulares={this.state.peliculasPopulares} />
      </React.Fragment>
    )
  }
}

export default Home





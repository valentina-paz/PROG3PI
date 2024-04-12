import React, { Component } from 'react'
import ContenedorPeliCartel from '../components/ContenedorPeliCartel/ContenedorPeliCartel'
//import ContenedorPeliPopular from '../components/ContenedorPeliPopular/ContenedorPeliPopular'
import FormBusqueda from '../components/FormBusqueda/FormBusqueda'
let pelisCarteleraUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06'
let pelisPopularesUrl= 'https://api.themoviedb.org/3/movie/popular?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      peliculas: []
    }
  }
  componentDidMount() {
    fetch(pelisCarteleraUrl)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          peliculas: data.results,
        })
      })
      .catch(err => console.log(err))

    fetch(pelisPopularesUrl)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          peliculasPopulares: data.results,
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <React.Fragment>
      <FormBusqueda />
      <ContenedorPeliCartel pelisCartelera={this.state.peliculas} />
      </React.Fragment>
    )
  }
}
//agregar <ContenedorPeliPopular pelisPopulares={this.state.peliculasPopulares} /> --> por ahora no funciona
export default Home





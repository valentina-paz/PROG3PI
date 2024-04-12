import React, { Component } from 'react'
import ContenedorPeliCartel from '../components/ContenedorPeliCartel/ContenedorPeliCartel'
import ContenedorPeliPopular from '../components/ContenedorPeliPopular/ContenedorPeliPopular'
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
          peliculasCartelera: data.results,
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
      <ContenedorPeliPopular pelisPopulares={this.state.peliculasPopulares} />
      <ContenedorPeliCartel pelisCartelera={this.state.peliculasCartelera} />
      </React.Fragment>
    )
  }
}

export default Home





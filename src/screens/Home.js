import React, { Component } from 'react'
import ContenedorPeliCartel from '../components/ContenedorPeliCartel/ContenedorPeliCartel'
let pelisCarteleraUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06'

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
  }
  render() {
    return (
      <React.Fragment>
      <ContenedorPeliCartel pelisCartelera={this.state.peliculas} />
      </React.Fragment>
    )
  }
}

export default Home





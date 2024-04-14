import React, { Component } from 'react'
import Pelicula from '../components/Pelicula/Pelicula'

class DetallePelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
          pelidata: null
        }
    }

    componentDidMount() {
      fetch (`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06`)
        .then(resp => resp.json())
        .then(data => {
        console.log(data)
        this.setState({
        pelidata: data
        })
        })
        .catch(err => console.log(err))
    }

    render() {
      return this.state.pelidata !== null ? (
        <Pelicula pelicula={this.state.pelidata} />)
        :
        (
        <section className="" id="section">
          <h2 className='titulos'>Cargando...</h2>
        </section>
        )
  }
}

export default DetallePelicula;


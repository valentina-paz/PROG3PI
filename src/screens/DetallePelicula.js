import React, { Component } from 'react'
import Pelicula from '../components/Pelicula/Pelicula'

class DetallePelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
          pelidata: null,
          estaEnFav: false
        }
    }

    componentDidMount() {
      fetch (`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06`)
        .then(resp => resp.json())
        .then(data => {
        //console.log(data)
        this.setState({
          pelidata: data
        })
        })
        .catch(err => console.log(err))

      let storageFav = localStorage.getItem('Favorito')
      let arrParseado = JSON.parse(storageFav)
      console.log(this.state.pelidata)
      if (arrParseado !== null) {
          let estaMiPeli = arrParseado.includes(this.props.match.params.id)
          if (estaMiPeli) {
              this.setState({
                  estaEnFav: true
              })
          } } }
          
    agregarFavorito(idPelicula) {
      let storageFav = localStorage.getItem('Favorito')
      if (storageFav === null) {
        let arrayId = [idPelicula]
        let arrStringificado = JSON.stringify(arrayId)
        localStorage.setItem('Favorito', arrStringificado)
      } else {
        let arrParseado = JSON.parse(storageFav)
        arrParseado.push(idPelicula)
        let arrStringificado = JSON.stringify(arrParseado)
        localStorage.setItem('Favorito', arrStringificado)
      }
      this.setState({
        estaEnFav: true
      })
    }

    render() {
      
      return (this.state.pelidata !== null ? (
        <Pelicula 
        pelicula={this.state.pelidata} 
        estaEnFav={this.state.estaEnFav}  
        />)
        :
        (
        <section className="" id="section">
          <h2 className='titulos'>Cargando...</h2>
        </section>
        ))
  }
}

export default DetallePelicula;


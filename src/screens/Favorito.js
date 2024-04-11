import React, { Component } from 'react'
import PeliculaCartel from '../components/PeliculaCartel/PeliculaCartel'

let pelisCartelera = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06'

class Favorito extends Component {

  constructor(props){
    super(props)
    this.state={
      favorito: localStorage.getItem('favorito'),
      peliculas:[]
    }
  }

  componentDidMount(){
    if(this.state.favorito !== null){
      let storageParseado = JSON.parse(this.state.favorito)
      Promise.all(
        storageParseado.map((elm)=> fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06`)
        .then(resp => resp.json())
        )
      )
      .then((data)=> this.setState({peliculas: data}))
      .catch((err)=> console.log(err))
    }
  }

  actualizarStateFav(arr){
    this.setState({
      peliculas: arr
    })
  }

  render() {
    return (
      <div>
        {
          this.state.peliculas.length > 0 ?
            this.state.peliculas.map((elm, idx) => <PeliculaCartel
            key={`${idx}-${elm.title}`}
            data={elm}
            estaEnFav={true}
            actualizarStateFav={(arr)=> this.actualizarStateFav(arr)}
            />)
          :
          <h1>No hay peliculas en favoritos</h1>
        
        }
      </div>
    )
  }
}

export default Favorito
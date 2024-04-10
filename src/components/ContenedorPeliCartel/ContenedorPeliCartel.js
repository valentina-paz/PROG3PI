import React, { Component } from 'react'
import PeliculaCartel from '../PeliculaCartel/PeliculaCartel'
//import FormFiltro from '../FormFiltro/FormFiltro' 
//VA A SER REUSLTADOS D BUSQUEDA
//importar el css
let pelisCartelera = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06'

class ContenedorPeliCartel extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas:[],
            backup:[],
            page:0
        }
    }

    componentDidMount(){
        fetch(pelisCartelera)
        .then(resp => resp.json())
        .then( data => {
            this.setState({
            peliculas: data.results,
            backup: data.results,
            page: this.state.page + 1
        })})
        .catch( err => console.log(err))
    }

    traerMasPeliculas(){
        fetch(`${pelisCartelera}&page=${(this.state.page + 1)}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            page: this.state.page + 1,
            peliculas: this.state.peliculas.concat(data.results)
        }))
        .catch(err => console.log(err))

    }


  render() { 
    return (
        <div>
            <div className='pelisCartelContainer'>
                {
                console.log(this.state.peliculas)}
                {this.state.peliculas.length > 0 ?
                    this.state.peliculas.map((elm, idx) => 
                    <PeliculaCartel key={idx + elm.title} data={elm} 
                    />)
                :
                <h1>Cargando</h1>
                }
            </div>
            <div>
                <button onClick={()=> this.traerMasPeliculas()}>
                    Mas peliculas
                </button>
            </div>
        </div>
    )
  }
}
export default ContenedorPeliCartel

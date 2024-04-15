
import Favorito from '../Favorito/Favorito'
import './styles.css'

function ContenedorFav (){
        return (
            <div className="detallegeneros">
              {
                this.props.peliculas.map((elm,idx) =>
                
                  <Favorito 
                    key={idx + elm.title} 
                    data= {elm}
                    id={elm.id}
                    titulo={elm.title}
                    imagen={'https://image.tmdb.org/t/p/w500' + elm.poster_path}
                    descripcion={elm.overview}
                    estaEnFav={elm.estaEnFav}
                    actualizarState={this.props.actualizarState ? (id) => this.props.actualizarState(id) : false}
                  />)
              }
            </ div>
            
          )
    }

  
export default ContenedorFav;
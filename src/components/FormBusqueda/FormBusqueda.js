import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class FormBusqueda extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
        this.props.filtrarPeliculas(this.state.valorInput)
    }

    guardarValor(event){
        this.setState({
            valorInput: event.target.value
        })
    }

    render(){
        return(
            <form className= "formulario-busqueda"
                onSubmit={(event)=> this.evitarSubmit(event)}
            >
                <input
                onChange={(event)=> this.guardarValor(event)}
                placeholder="Busca una pelicula" />
                <Link to={`/resultadosBusqueda/${this.state.valorInput}`}>
                    <button className= "botones" type="submit">Buscar</button>
                </Link>
            </form>
        )
    }
}

export default FormBusqueda
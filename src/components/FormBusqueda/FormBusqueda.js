import { Component } from "react";

class FormFiltro extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    guardarValor(event){
        this.setState({
            valorInput: event.target.value
        },
        ()=> this.props.filtrarPersonajes(this.state.valorInput))
    }

    render(){
        return(
            <form
                onSubmit={(event)=> this.evitarSubmit(event)}
            >
                <input
                onChange={(event)=> this.guardarValor(event)}
                placeholder="Busca tu personaje de RM" />
            </form>
        )
    }
}

export default FormFiltro
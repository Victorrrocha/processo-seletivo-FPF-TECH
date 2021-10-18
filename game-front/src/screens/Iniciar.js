import React from 'react'
import  Button  from 'react-bootstrap/Button'
import { Link} from "react-router-dom";

function Iniciar() {
    return (
        <div className="screen flex-center">
            <div className="menu">
                <Link to="/game"><Button variant="secondary" size="lg" className="ui-btn" >Iniciar Jogo</Button></Link>
                <Link to="/"><Button variant="secondary" size="lg" className="ui-btn" >Voltar</Button></Link>
            </div>
        </div>
    )
}

export default Iniciar

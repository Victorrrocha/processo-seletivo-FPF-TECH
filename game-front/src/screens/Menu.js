import React from 'react'
import  Button  from 'react-bootstrap/Button'
import { Link} from "react-router-dom";

function Menu() {


    return (
        <div className="screen flex-center">
            <div className="menu">
                <h1>Bem-vindo</h1>
                <Link to="/iniciar"><Button variant="secondary" size="lg" className="ui-btn" >Jogo</Button></Link>
                <Link to="/ranking"><Button variant="secondary" size="lg">Ranking</Button></Link>
            </div>
        </div>
    )
}

export default Menu

import React, { useRef } from 'react'
import classes from './Endgame.module.css'
import { useSelector } from 'react-redux'
import useUI from '../../hooks/use-ui'

import  Button  from 'react-bootstrap/Button'
import {useHistory, Link} from "react-router-dom";

function Endgame() {

    const history = useHistory()
    const { saveScore } = useUI()

    const inputName = useRef()

    const playerWon = useSelector(state => state.game.playerWon)
    const hp = useSelector(state => state.game.player.health)
    const turns = useSelector(state => state.game.turn)

    const score = (hp * 1000) / turns

    const saveScoreHandle = (event) => {
        console.log("saving score")
        event.preventDefault()

        const name = inputName.current.value
  
        saveScore({playerName: name, score})
        history.push('/iniciar')
    }   

    const nameInputField = (
        <form className={classes.form} onSubmit={saveScoreHandle}>
            <label htmlFor="name">Adicione seu nome</label>
            <input ref={inputName} type="text" id="name" />
            <Button type="submit" variant="success">Salvar</Button>
        </form>
    )

    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <p className={classes.title}>Fim de jogo</p>
                <h2>Você {playerWon ? <span>Ganhou</span> : <span>Perdeu</span>}</h2>
                <p>Pontuação: <span className={classes.score}>{score}</span></p>
                {playerWon && nameInputField}
                <Link to="/iniciar"><Button variant="secondary">voltar</Button></Link>
                
            </div>
        </div>
    )
}

export default Endgame
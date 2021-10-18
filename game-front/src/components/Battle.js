import { useSelector } from 'react-redux'

import React from 'react'
import Contestant from './Contestant'
import classes from './Battle.module.css'

function Battle() {

    const playerHealth = useSelector(state => state.game.player.health)
    const monstroHealth = useSelector(state => state.game.monster.health)
   
    return (
        <div className={classes.container}>
            <Contestant name="Jogador" percentage={playerHealth} />
            <Contestant name="Monstro" percentage={monstroHealth} />
        </div>
    )
}

export default Battle

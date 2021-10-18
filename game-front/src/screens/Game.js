import React, {useEffect, useCallback} from 'react'
import useCommands from '../hooks/use-commands'

import Battle from '../components/Battle'
import Commands from '../components/Commands'
import Log from '../components/Log'

import { useDispatch, useSelector } from 'react-redux'
import { gameActions } from '../store/game'
import Endgame from '../components/Endgame/Endgame'

function Game() {

    const { startGame } = useCommands()
    const dispatch = useDispatch()

    const initializeGameState = useCallback((GAME) => {
        dispatch(gameActions.update({...GAME}))
    }, [dispatch])

    useEffect(() => {
        startGame(initializeGameState)
    }, [startGame, initializeGameState])

    const gameStatus = useSelector(state => state.game.status)

    return (
        <div className="screen">  
            {!gameStatus && <Endgame />}  
            <Battle />
            {gameStatus && <Commands />}
            <Log />
        </div>
    )
}

export default Game

import React from 'react'
import classes from './Commands.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { gameActions } from '../store/game'
import { useHistory } from 'react-router'

import Title from './Title'
import CommandButton from './CommandButton'
import useCommands from '../hooks/use-commands'

function Commands() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { sendCommand } = useCommands()

    const ataqueCommand = () => {
        sendCommand({action: 'ataque'}, handleUpdate)
    }

    const ataqueEspecialCommand = () => {
        sendCommand({action: 'ataque-especial'}, handleUpdate)
    }

    const curarCommand = () => {
        sendCommand({action: 'curar'}, handleUpdate)
    }

    const desistirCommand = () => {
        history.push('/iniciar')
    }

    const handleUpdate = (data) => {
        dispatch(gameActions.update({...data}))
    }

    const charged = useSelector(state => state.game.player.specialAttackCounter)

    return (
        <div className={classes.container}>
            <Title title="Comandos" />
            <div className={classes.btn_container}>
                <CommandButton action={ataqueCommand} bgColor="#002ab4" name="Ataque" />
                <CommandButton isDisabled={charged >= 2 ? false : true} action={ataqueEspecialCommand} bgColor="#b40000" name="Ataque Especial" />
                <CommandButton action={curarCommand} bgColor="#00b400" name="Curar" />
                <CommandButton action={desistirCommand} bgColor="#a600b4" name="Desistir" />
            </div>
        </div>
    )
}

export default Commands

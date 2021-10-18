import React, { useEffect, useState, useCallback } from 'react'
import  Button  from 'react-bootstrap/Button'
import { Link} from "react-router-dom";
import useUI from '../hooks/use-ui';

import classes from './Ranking.module.css'

function Ranking() {

    const [ranks, setRanks] = useState([])
    const { getRanking } = useUI()

    const initializeData = useCallback( (data) => {
        // tratar dados

        setRanks(data)
    }, [])

    useEffect(() => {
        getRanking(initializeData)
    }, [getRanking, initializeData])

    let rankEntries = (
        ranks.map(rank => {
            return <div className={classes.entry_container}>
                <p>{rank.playerName}</p>
                <p>{rank.data}</p>
                <p>{rank.score}</p>
            </div>
        })
    )

    if(ranks.length === 0){
        rankEntries = (
            <div>
                <h2>Sem ganhadores ainda</h2>
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <h1>Ranking</h1>
            <Link to="/"><Button variant="secondary" size="lg" className="ui-btn" >Voltar</Button></Link>
            <div className={classes.entry_container}>
                <p>Nome</p>
                <p>Data</p>
                <p>Pontuação</p>
            </div>
            {rankEntries}
        </div>
    )
}

export default Ranking

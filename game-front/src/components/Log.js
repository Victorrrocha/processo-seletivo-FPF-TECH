import { useSelector } from 'react-redux'
import Title from './Title'
import LogEntry from './LogEntry'

import classes from './Log.module.css'

function Log() {

    //pegar do estado global um array com as ações
    const entries = useSelector(state => state.game.logEntries)

    return (
        <div className={classes.container}>
            <Title title="Log"/>
            <div className={classes.logEntries}>
                {entries.map(entry => {
                    return <LogEntry key={entry.id} type={entry.type} text={entry.message} contestant={entry.contestant} />
                })} 
            </div>
        </div>
    )
}

export default Log

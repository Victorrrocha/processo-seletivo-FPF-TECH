import React from 'react'

import classes from './LogEntry.module.css'

function LogEntry({type, text, contestant}) {

    let color 

    switch(type){
        case 1:
            color = "#d87c7c"
            break
        case 2:
            color = "#6275b5"
            break
        case 3:
            color = "#b4b469"
            break
        case 4:
            color = "#62b56c"
            break
        default:
            color = "#d87c7c"
    }

    let style = {
        textAlign: 'left',
        backgroundColor: color
    }

    if(contestant === "monster"){
        style = {
            textAlign: 'right',
            backgroundColor: color
        }
    }

    return (
        <div className={classes.entry_container} style={style}>
            <p>{text}</p>
        </div>
    )
}

export default LogEntry

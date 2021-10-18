import React from 'react'
import classes from './CommandButton.module.css'

function CommandButton({name, isDisabled, bgColor, action}) {

    const style = {
        backgroundColor: `${bgColor}`
    }

    return (
        <button disabled={isDisabled} className={classes.btn} onClick={action} style={style}>
            {name}
        </button>
    )
}

export default CommandButton

import React from 'react'
import classes from './Title.module.css'

function Title({title}) {
    return <p className={classes.title}>{title}</p>
}

export default Title

import React from 'react'
import classes from './Contestant.module.css'

import Title from './Title'

function Contestant({name, percentage}) {

    //console.log(`name: ${name} percentage: ${percentage}`)

    let fill = {
        width: `${percentage}%`,
        backgroundColor: '#00b400'
    } 

    if(percentage < 20){
        fill = {
            width: `${percentage}%`,
            backgroundColor: 'red'
        }
    }

    return (
        <div className={classes.container}>
            <Title title={name} />
            <div className={classes.bar}>
                <p className={classes.percentage}>{percentage}%</p>
                <span className={classes.fill} style={fill}></span>
            </div>
        </div>
    )
}

export default Contestant

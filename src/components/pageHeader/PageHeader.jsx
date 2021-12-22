import React from 'react'
import classes from './PageHeader.module.scss'

export const PageHeader = (props) => {
    return (
        <div className={classes.header}>
            {props.children}
        </div>
    )
}

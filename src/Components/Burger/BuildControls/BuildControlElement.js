import React from 'react';
import classes from './BuildControlElement.module.css'

const buildcontrolement = (props) =>(
        <div className={classes.BuildControl}>
            <div className={classes.Label} >{props.label}</div>
            <button className={classes.Less} onClick={props.deleted}>Delete</button>
            <button className={classes.More} onClick={props.added}>Add</button>
        </div>
);


export default buildcontrolement;
import React from 'react';
import classes from './BuildControls.module.css'
import BuildControlElement from './BuildControlElement'

const controls=
[
    {label: 'Salad', type:'salad'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
         {
            controls.map(ctrl=>(
                <BuildControlElement 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingridientAdded(ctrl.type)}/>
            ))
         }
    </div>
);

export default buildControls;
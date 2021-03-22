import React from 'react';
import Aux from '../../../Hoc/hoc_Aux'

const orderSummary= (props)=>{
    const ingredientsSummary= Object.keys(props.ingredients)
        .map(igkey=>{
            return <li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}</li>
        });//span with that style will help in capitialize
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Your Delicious Burger is ready</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout</p>
        </Aux>
    )

};

export default orderSummary;
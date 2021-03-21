import React from 'react';
import classes from './Burger.module.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const burger = (Burger_props) => {
    const Received_Ingridents = Object.keys(Burger_props.ingredients).map(igkey=>{
        return [...Array(Burger_props.ingredients[igkey])].map((_,i)=>
        {
            return <BurgerIngridient key= {igkey+i} type={igkey} />
        });
    }); //Array of keys
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
            {/* <BurgerIngridient type="cheese"/>
            <BurgerIngridient type="meat"/> */}
            {Received_Ingridents}
            <BurgerIngridient type="bread-bottom"/>
        </div>
    );
};

export default burger;
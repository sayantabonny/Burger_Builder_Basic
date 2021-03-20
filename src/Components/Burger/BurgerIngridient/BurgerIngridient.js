import classes from '*.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BurgerIngridient extends Component{
    render(){
        let ingridient = null;

        switch(this.props.type){
            case ('bread-bottom'):
                ingridient=<div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingridient=
                (<div className={classes.BreadTop}>
                    <div className={classes.seed1}></div>
                    <div className={classes.seed2}></div>
                 </div>)
    
                break;
                
            case ('meat'):
                ingridient=<div className={classes.Meat}></div>
                break;
                    
            case ('cheese'):
                ingridient=<div className={classes.Cheese}></div>
                break;
    
            case ('salad'):
                    ingridient=<div className={classes.salad}></div>
                    break;
            default:
                    ingridient=null;
        }
       
    }
}


BurgerIngridient.prototype={
    type: PropTypes.string.isRequired
}; //type validation

export default BurgerIngridient;
import React, { Component } from 'react';
import Aux from "../../Hoc/hoc_Aux";
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'



const INGRIDIENT_PRICES={
    salad:10,
    cheese:10,
    meat: 50,
}


class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    //two ways to define state
    
    state = {
        ingredients:
        {
            cheese:0,
            meat:0,
            salad:0,
        },
        totalPrice: 100
    }

    addIngredientHandler =(type) => {
        const oldCount= this.state.ingredients[type];
        const updatedCounted=oldCount+1;
        const updatedIngridients={
            ...this.state.ingredients
        };
        updatedIngridients[type]=updatedCounted;
        const priceAddition=INGRIDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngridients})
    }
    removeIngredientHandler =(type) => {
        
    }


    render (){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingridientAdded={this.addIngredientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
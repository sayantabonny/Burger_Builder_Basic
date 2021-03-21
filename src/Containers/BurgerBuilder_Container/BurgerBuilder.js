import React, { Component } from 'react';
import Aux from "../../Hoc/hoc_Aux";
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

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
        }

    }


    render (){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
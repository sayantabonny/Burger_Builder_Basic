import React, { Component } from 'react';
import Aux from "../../Hoc/hoc_Aux";
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    //two ways to define state
    
    state = {
        ingredients:
        {
            salad:1,
            meat:2,
            cheese:2,
        }

    }


    render (){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
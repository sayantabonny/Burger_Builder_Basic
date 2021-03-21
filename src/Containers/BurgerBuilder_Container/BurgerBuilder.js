import React, { Component } from 'react';
import Aux from "../../Hoc/hoc_Aux";
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component{
    render (){
        return (
            <Aux>
                <div>Burger</div>
                <Burger/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
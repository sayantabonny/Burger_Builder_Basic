import classes from './layout.module.css';
import React, {Component} from 'react'
import Aux from '../../Hoc/hoc_Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class layout extends Component{
    render(){
        <Aux>
        <Toolbar/>
        <SideDrawer/>
    <main className={classes.Content}>

        {this.props_args.children}

    </main>
    </Aux> 
    }
} 
/*Or we could have used used Div as single element is needed in return */
export default layout;
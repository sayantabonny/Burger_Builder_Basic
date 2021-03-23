import React from 'react';
import Logo from '../../Burger/Logo/Logo'
import Navigation from '../NavigationItems/Navigationitems'
import classes from "./SideDrawer.module.css"
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../Hoc/hoc_Aux'

const sideDrawer=(props)=>{

    return(

        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <Navigation/>
            </nav>


        </div>
        </Aux>
    )

}
export default sideDrawer;
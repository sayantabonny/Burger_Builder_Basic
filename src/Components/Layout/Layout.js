import React from 'react'
import Aux from '../../Hoc/hoc_Aux'
const layout = (props_args) => (
    <Aux>
        <div>Toolbar,Sidebar,Backdrop</div>
    <main>

        {props_args.children}

    </main>
    </Aux> /*Or we could have used used Div as single element is needed in return */
)

export default layout;
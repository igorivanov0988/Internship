import React from "react";
import NavigationMenu from '../../containers/MenuNavigation/NavigationMenu'

import './styles.css'

export default class Drawer extends React.Component{

    render() {
        return(
            <div className='main_Drawer'>
                <NavigationMenu {...this.props}/>
                <div className='drawer_children'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
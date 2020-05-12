import React, { Component } from 'react';
import UserSettings from "../UserSettings/UserSettings";

import './styles.css';

class Agenda extends Component {

    render() {
        return (

            <div className='main_Agenda'>
                <div className='agenda_user'>
                    <UserSettings {...this.props}/>
                </div>

            </div>
          )
    }
}

export default Agenda;
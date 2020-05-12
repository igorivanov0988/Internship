import React, { Component } from 'react';
import Drawer from '../../components/DrawerContainer'

import './styles.css';

class CalendarPage extends Component {

    render() {
        return (
            <Drawer {...this.props}>
            <div className='main'>
                <div className='main_screen'>
                    <div className='footer_linc'>
                        <a>Post</a>
                        <a>Archive</a>
                    </div>

                </div>

            </div>
            </Drawer>
        )
    }
}

export default CalendarPage;
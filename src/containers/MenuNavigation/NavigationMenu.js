import React from 'react'

import List from "./List";
import './styles.css'

class NavigationMenu extends React.Component {

    render() {

        const { location } = this.props;
        const listItems = [
            {
                text: 'Posts',
                path: '/CreatePostPage',
                isActive: location.pathname === '/CreatePostPage'
            },
            {
                text: 'Calendar',
                path: '/Calendar',
                isActive: location.pathname === '/Calendar'
            },
            {
                text: 'Statistics',
                path: '/Statistics',
                isActive: location.pathname === '/Statistics'
            },
            {
                text: 'Archive',
                path: '/Archive',
                isActive: location.pathname === '/Archive'
            },
        ]

        return (
            <div className='navigation'>
                <p className='statistics'>Statistics</p>
                    <div className='buttons'>
                        <List listItems={listItems}/>
                    </div>
            </div>
        )
    }
}

export default NavigationMenu
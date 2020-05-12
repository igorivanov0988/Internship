import React from 'react'
import { List, ListItemText } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import './styles.css'

const MaterialList = ({ listItems = [], toggleDrawer }) => (
    <div>
        <List className='buttons'>
            {listItems.map((item, index) => (
                <NavLink
                    className='navigation_btn'
                    key={item.text}
                    to={item.path}
                    activeClassName='navigation_btn_active'
                    isActive={()=>item.isActive}
                    style={{ textDecoration: 'none' }}>
                    <ListItemText primary={item.text} />
                </NavLink>
            ))}
        </List>
    </div>
)

export default MaterialList
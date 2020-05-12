import React, { Component } from 'react';
import {compose} from "redux";
import Avatar from '@material-ui/core/Avatar'
import { Menu, MenuList, MenuButton, MenuItem, MenuLink } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import {connect} from 'react-redux';
import {Log_Out} from "../../store/actions/logout"

import './styles.css';



class UserSettings extends Component {

    Log_Out = () => {
        this.props.Log_Out();
        this.props.history.push("/Login");

    }

    render() {
        const {user=[]} = this.props
        console.log('UserSettings111111111111111111111111111', this.props.user)
        return (
            <div className='main_Settings'>
                <div className='user_Settings'>
                    <p>Hello, {user[0].name}</p>
                    {/*<p>Hello, User</p>*/}
                </div>
                <div className='avatar_picture'>
                    <Avatar src="/broken-image.jpg"/>
                </div>
                <div>
                    <Menu>
                        <MenuButton className='menu_button'>
                            Menu <span aria-hidden>▾</span>
                        </MenuButton>
                        <MenuList className='menu_list'>
                            <MenuItem onClick={() => alert("Settings")}>Settings</MenuItem>
                            <MenuItem onClick={this.Log_Out}>Log Out</MenuItem>
                            {/*<MenuLink as="a" href="https://reacttraining.com/workshops/">Attend a Workshop</MenuLink>*/}
                        </MenuList>
                    </Menu>
                </div>

            </div>
        )
    }
}
const mapStateToProps = ({ auth }) => ({
    user: auth.user
})

const mapDispatchToProps = {
    Log_Out
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(UserSettings);


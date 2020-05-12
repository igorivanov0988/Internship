import React, { Component } from 'react';
import Drawer from '../../components/DrawerContainer'
import CreatePostScreen from "../CreatePostScreens/CreatePostScreen/CreatePostScreen";
import LinkAccountsScreen from "../CreatePostScreens/LinkAccountScreen/LinkAccountsScreen"
import Agenda from "../Agenda";

import './styles.css';


class CreatePostPage extends Component {

    constructor() {
        super();
        this.state = {
            changeScreen: false,
        };
    }

    Post = (title, message, fileList) => {
        this.setState({changeScreen: true})
        console.log({title, message, fileList})
    }

    goToBack = () => {
        this.setState({changeScreen: false})
    }


    render() {
        const { changeScreen } = this.state

        return (
            <Drawer {...this.props}>
            <div className='main_Post_Page'>
                <div className='main_screen_Post_Page'>
                    <div className='header_linc'>
                        <a  href='#'>Post</a>
                        <a href='#'>Archive</a>
                    </div>
                    <div>
                        {changeScreen ? (
                            <LinkAccountsScreen {...this.props} onClickBack={this.goToBack} />
                        ) : (
                            <CreatePostScreen onClick={this.Post} />
                        )}
                    </div>
                </div>
                    <Agenda {...this.props}/>
            </div>
            </Drawer>
        )
    }
}

export default CreatePostPage;
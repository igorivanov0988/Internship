import React, { Component } from 'react';
import AutUsingFacebook from '../../../components/AuthorizationUsingSocialNetworks/Facebook'
import './styles.css';
import {Facebook, Instagram, Twitter,  YouTube, LinkedIn, Telegram } from "@material-ui/icons";

class LinkAccountsScreen extends Component {


    goToSkip = () => {
        console.log('11')
    }

    render() {
        console.log('11111',this.props)
        return (
                <div className='main_screen'>
                    <div className='text_linc_screen'>
                        <p className='text_one'>Link your social media accounts to the project</p>
                        <p className='text_two'>Link as many of your social media profiles</p>
                    </div>
                    <div className='profiles'>
                        {/*mi profiles*/}
                    </div>
                    <div className='choice_social'>
                        <p>Link more profiles</p>
                        <div className='choice_social_buttons'>
                            <button onClick={this.props.FaceboockLogIn}><Facebook/>Connect</button>
                            <AutUsingFacebook {...this.props}/>
                            <button ><Instagram/>Connect</button>
                            <button><Twitter/>Connect</button>
                            <button><YouTube/>Connect</button>
                            <button><LinkedIn/>Connect</button>
                            <button><Telegram/>Connect</button>
                        </div>
                    </div>
                    <div className='btn_post_window'>
                        <button onClick={this.props.onClickBack}>Back</button>
                        <button onClick={this.goToSkip}>Skip</button>
                    </div>
                </div>
        )
    }
}

export default LinkAccountsScreen;
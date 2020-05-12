import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';


class AutUsingFacebook extends React.Component {
    // responseFacebook(response) {
    //     console.log(response);
    // }
     responseFacebook = (response) => {
        console.log(response);
    }

    FaceboockClicked = () => {
        console.log( "111111111111111111111111111111111Clicked!" )
    }

    render() {
        return (
            <FacebookLogin {...this.props}
                appId="1206715649505081"
                // autoLoad
                fields="name,email,picture"
                FaceboockLogIn={this.FaceboockClicked}
                callback={this.responseFacebook}
                />

        )

    }
}

export default AutUsingFacebook;

// <FacebookLogin {...this.props}
//                appId="1206715649505081"
//     // autoLoad
//                fields="name,email,picture"
//                FaceboockLogIn={this.FaceboockClicked}
//                callback={this.responseFacebook}
// />

// <FacebookLogin
//     appId="126186198149"
//     // autoLoad
//     callback={this.responseFacebook}
//     render={renderProps => (
//         <button onClick={renderProps.onClick}>This is my custom FB button</button>
//     )}
// />

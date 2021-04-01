import React from 'react';
import { connect } from 'react-redux';

function Profile(props) {
    if (!props.user) {
        props.history.push('/')
    }
    return (
        <>
            <h1>You Google ID is  - {props.user.googleId}</h1>
            <h1>Your Name is - {props.user.username}</h1>
            Your Profile is
            <img src={props.user.picture} alt="UserName" />
        </>
    );
}



const mapStateToProps = (state) => {
    console.log("STATE PROFILE", state)
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(Profile)
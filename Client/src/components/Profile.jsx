import React from 'react';
import { connect } from 'react-redux';

function Profile(props) {
    // if (!props.user) {
    //     props.history.push('/')
    // }
    return (
        <>
            <h1>You Google ID is</h1>
        </>
    );
}



const mapStateToProps = (state) => {
    console.log("STATE PROFILE", state)
    return {}
}

export default connect(mapStateToProps)(Profile)
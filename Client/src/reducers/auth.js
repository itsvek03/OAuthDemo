import * as ACTION_TYPES from '../actions/user.type'

const auth = (state = {}, action) => {
    console.log("Reducer", action.payload)
    switch (action.type) {
        case ACTION_TYPES.GET_USER:
            return action.payload || false
        default:
            return state
    }
}

export default auth;
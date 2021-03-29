import * as ACTION_TYPES from './user.type'
import axios from 'axios'

export const fetchUserAction = () => {
    return (dispatch) => {
        axios.get('/user')
            .then(response => {
                dispatch({
                    type: ACTION_TYPES.GET_USER,
                    payload: response.data
                })
            })
    }
}
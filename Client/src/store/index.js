import { combineReducers } from "redux";
import auth from '../reducers/auth'

const reducer = combineReducers({
    auth: auth
})




export default reducer;
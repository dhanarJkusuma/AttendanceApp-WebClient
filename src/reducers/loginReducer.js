/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import { SUCCESS_AUTH, DO_AUTH, FAILURE_AUTH } from '../actions/actionLogin';

export default function login(state=[], action={}){
    switch (action.type){
        case DO_AUTH :
            return Object.assign({}, state, {
                authenticated: false,
                authenticating: true
            });

        case SUCCESS_AUTH :
            return Object.assign({}, state, {
                token : action.payload.token,
                message : "Successfully Login",
                authenticated : true,
                authenticating: false
            });

        case FAILURE_AUTH :
            return Object.assign({},state, {
                message : action.payload.message,
                authenticated: false,
                authenticating: false
            });

        default:
            return state;
    }
}
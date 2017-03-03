/**
 * Created by Dhanar J Kusuma on 02/03/2017.
 */

import {
    DO_REQUEST_LOCATION,
    DONE_REQUEST_LOCATION,
    FAILURE_REQUEST_LOCATION,
    DO_POST_LOCATION,
    DONE_POST_LOCATION,
    FAILURE_POST_LOCATION,
    DO_UPDATE_LOCATION,
    DONE_UPDATE_LOCATION,
    FAILURE_UPDATE_LOCATION,
    FINISH_UPDATE_LOCATION,
    DO_DELETE_LOCATION,
    DONE_DELETE_LOCATION,
    FAILURE_DELETE_LOCATION,
    FINISH_DELETE_LOCATION
} from '../actions/actionLocation';

export default function location(state=[], action={}){
    switch (action.type){
        case DO_REQUEST_LOCATION:
            return Object.assign({}, state, {
                requesting: true,
                response : [],
                error : null
            });
        case DONE_REQUEST_LOCATION:
            return Object.assign({}, state, {
                requesting: false,
                response : action.payload.data,
                error : null
            });
        case FAILURE_REQUEST_LOCATION:
            return Object.assign({}, state, {
                requesting: false,
                response: [],
                error : action.payload.error
            });

        case DO_POST_LOCATION :
            return Object.assign({}, state, {
                posting : true,
                data : {},
                error : null
            });
        case DONE_POST_LOCATION :
            return Object.assign({}, state, {
                posting: false,
                data: action.payload.data,
                error: null
            });
        case FAILURE_POST_LOCATION:
            return Object.assign({}, state, {
                posting: false,
                data: {},
                error : action.payload.error
            });

        case DO_UPDATE_LOCATION:
            return Object.assign({}, state, {
                updating : true,
                updated : false,
                message : {},
                error : null
            });
        case DONE_UPDATE_LOCATION :
            return Object.assign({}, state, {
                updating: false,
                updated : true,
                message: action.payload.message,
                error: null
            });
        case FAILURE_UPDATE_LOCATION:
            return Object.assign({}, state, {
                updating: false,
                updated : false,
                message: {},
                error : action.payload.error
            });
        case FINISH_UPDATE_LOCATION:
            return Object.assign({}, state, {
                updated : false
            });

        case DO_DELETE_LOCATION:
            return Object.assign({}, state, {
                deleting : true,
                deleted : false,
                message : {},
                error : null
            });
        case DONE_DELETE_LOCATION :
            return Object.assign({}, state, {
                deleting: false,
                deleted : true,
                message: action.payload.message,
                error: null
            });
        case FAILURE_DELETE_LOCATION:
            return Object.assign({}, state, {
                deleting: false,
                deleted : false,
                message: {},
                error : action.payload.error
            });
        case FINISH_DELETE_LOCATION:
            return Object.assign({}, state, {
                deleted : false
            });
        default:
            return state;
    }
}
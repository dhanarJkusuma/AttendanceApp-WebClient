/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */

import {
    DO_REQUEST_KLOTER,
    DONE_REQUEST_KLOTER,
    FAILURE_REQUEST_KLOTER,
    DO_POST_KLOTER,
    DONE_POST_KLOTER,
    FAILURE_POST_KLOTER,
    DO_UPDATE_KLOTER,
    DONE_UPDATE_KLOTER,
    FAILURE_UPDATE_KLOTER,
    FINISH_UPDATE_KLOTER,
    DO_DELETE_KLOTER,
    DONE_DELETE_KLOTER,
    FAILURE_DELETE_KLOTER,
    FINISH_DELETE_KLOTER
} from '../actions/actionKloter';

export default function kloter(state=[], action={}){
    switch (action.type){
        case DO_REQUEST_KLOTER:
            return Object.assign({}, state, {
                requesting: true,
                response : [],
                error : null
            });
        case DONE_REQUEST_KLOTER:
            return Object.assign({}, state, {
                requesting: false,
                response : action.payload.data,
                error : null
            });
        case FAILURE_REQUEST_KLOTER:
            return Object.assign({}, state, {
                requesting: false,
                response: [],
                error : action.payload.error
            });

        case DO_POST_KLOTER :
            return Object.assign({}, state, {
                posting : true,
                data : {},
                error : null
            });
        case DONE_POST_KLOTER :
            return Object.assign({}, state, {
                posting: false,
                data: action.payload.data,
                error: null
            });
        case FAILURE_POST_KLOTER:
            return Object.assign({}, state, {
                posting: false,
                data: {},
                error : action.payload.error
            });

        case DO_UPDATE_KLOTER:
            return Object.assign({}, state, {
            updating : true,
            updated : false,
            message : {},
            error : null
        });
        case DONE_UPDATE_KLOTER :
            return Object.assign({}, state, {
                updating: false,
                updated : true,
                message: action.payload.message,
                error: null
            });
        case FAILURE_UPDATE_KLOTER:
            return Object.assign({}, state, {
                updating: false,
                updated : false,
                message: {},
                error : action.payload.error
            });
        case FINISH_UPDATE_KLOTER:
            return Object.assign({}, state, {
                updated : false
            });

        case DO_DELETE_KLOTER:
            return Object.assign({}, state, {
                deleting : true,
                deleted : false,
                message : {},
                error : null
            });
        case DONE_DELETE_KLOTER :
            return Object.assign({}, state, {
                deleting: false,
                deleted : true,
                message: action.payload.message,
                error: null
            });
        case FAILURE_DELETE_KLOTER:
            return Object.assign({}, state, {
                deleting: false,
                deleted : false,
                message: {},
                error : action.payload.error
            });
        case FINISH_DELETE_KLOTER:
            return Object.assign({}, state, {
                deleted : false
            });
        default:
            return state;
    }
}
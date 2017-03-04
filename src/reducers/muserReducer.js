/**
 * Created by Dhanar J Kusuma on 04/03/2017.
 */

import {
    DO_REQUEST_MUSER,
    DONE_REQUEST_MUSER,
    FAILURE_REQUEST_MUSER,
    DO_POST_MUSER,
    DONE_POST_MUSER,
    FAILURE_POST_MUSER,
    DO_UPDATE_MUSER,
    DONE_UPDATE_MUSER,
    FAILURE_UPDATE_MUSER,
    FINISH_UPDATE_MUSER,
    DO_DELETE_MUSER,
    DONE_DELETE_MUSER,
    FAILURE_DELETE_MUSER,
    FINISH_DELETE_MUSER,
    DO_PREPARE_FORM_USER,
    DONE_PREPARE_FORM_USER,
    FAILURE_PREPARE_FORM_USER

} from '../actions/actionUser';

export default function muser(state=[], action={}){
    switch(action.type){

        case DO_REQUEST_MUSER:
            return Object.assign({}, state, {
                requesting: true,
                response : [],
                error : null
            });

        case DONE_REQUEST_MUSER:
            return Object.assign({}, state, {
                requesting: false,
                response : action.payload.data,
                error : null
            });

        case FAILURE_REQUEST_MUSER :
            return Object.assign({}, state, {
                requesting: false,
                response: [],
                error : action.payload.error
            });

        case DO_POST_MUSER :
            return Object.assign({}, state, {
                posting : true,
                data : {},
                error : null
            });
        case DONE_POST_MUSER :
            return Object.assign({}, state, {
                posting: false,
                data: action.payload.data,
                error: null
            });
        case FAILURE_POST_MUSER:
            return Object.assign({}, state, {
                posting: false,
                data: {},
                error : action.payload.error
            });

        case DO_UPDATE_MUSER:
            return Object.assign({}, state, {
                updating : true,
                updated : false,
                message : {},
                error : null
            });
        case DONE_UPDATE_MUSER :
            return Object.assign({}, state, {
                updating: false,
                updated : true,
                message: action.payload.message,
                error: null
            });
        case FAILURE_UPDATE_MUSER:
            return Object.assign({}, state, {
                updating: false,
                updated : false,
                message: {},
                error : action.payload.error
            });
        case FINISH_UPDATE_MUSER:
            return Object.assign({}, state, {
                updated : false
            });

        case DO_DELETE_MUSER:
            return Object.assign({}, state, {
                deleting : true,
                deleted : false,
                message : {},
                error : null
            });
        case DONE_DELETE_MUSER :
            return Object.assign({}, state, {
                deleting: false,
                deleted : true,
                message: action.payload.message,
                error: null
            });
        case FAILURE_DELETE_MUSER:
            return Object.assign({}, state, {
                deleting: false,
                deleted : false,
                message: {},
                error : action.payload.error
            });
        case FINISH_DELETE_MUSER:
            return Object.assign({}, state, {
                deleted : false
            });

        case DO_PREPARE_FORM_USER :
            return Object.assign({}, state, {
                preparing : true,
                prepared : false,
                data : {},
                error : null
            });
        case DONE_PREPARE_FORM_USER :
            return Object.assign({}, state, {
                preparing : false,
                prepared : true,
                idata : action.payload.data,
                error : null
            });
        case FAILURE_PREPARE_FORM_USER :
            return Object.assign({}, state, {
                preparing : false,
                prepared : false,
                idata : {},
                error : action.payload.err
            });

        default :
            return state;
    }
}
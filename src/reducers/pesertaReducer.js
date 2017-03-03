/**
 * Created by Dhanar J Kusuma on 02/03/2017.
 */

import {
    DO_REQUEST_PESERTA,
    DONE_REQUEST_PESERTA,
    FAILURE_REQUEST_PESERTA,
    DO_POST_PESERTA,
    DONE_POST_PESERTA,
    FAILURE_POST_PESERTA,
    DO_UPDATE_PESERTA,
    DONE_UPDATE_PESERTA,
    FAILURE_UPDATE_PESERTA,
    FINISH_UPDATE_PESERTA,
    DO_DELETE_PESERTA,
    DONE_DELETE_PESERTA,
    FAILURE_DELETE_PESERTA,
    FINISH_DELETE_PESERTA,
    DO_PREPARE_FORM,
    DONE_PREPARE_FORM,
    FAILURE_PREPARE_FORM

} from '../actions/actionPeserta';

export default function kloter(state=[], action={}){
    switch (action.type){
        case DO_REQUEST_PESERTA:
            return Object.assign({}, state, {
                requesting: true,
                response : [],
                error : null
            });
        case DONE_REQUEST_PESERTA:
            return Object.assign({}, state, {
                requesting: false,
                response : action.payload.data,
                error : null
            });
        case FAILURE_REQUEST_PESERTA:
            return Object.assign({}, state, {
                requesting: false,
                response: [],
                error : action.payload.error
            });

        case DO_POST_PESERTA :
            return Object.assign({}, state, {
                posting : true,
                data : {},
                error : null
            });
        case DONE_POST_PESERTA :
            return Object.assign({}, state, {
                posting: false,
                data: action.payload.data,
                error: null
            });
        case FAILURE_POST_PESERTA:
            return Object.assign({}, state, {
                posting: false,
                data: {},
                error : action.payload.error
            });

        case DO_UPDATE_PESERTA:
            return Object.assign({}, state, {
                updating : true,
                updated : false,
                message : {},
                error : null
            });
        case DONE_UPDATE_PESERTA :
            return Object.assign({}, state, {
                updating: false,
                updated : true,
                message: action.payload.message,
                error: null
            });
        case FAILURE_UPDATE_PESERTA:
            return Object.assign({}, state, {
                updating: false,
                updated : false,
                message: {},
                error : action.payload.error
            });
        case FINISH_UPDATE_PESERTA:
            return Object.assign({}, state, {
                updated : false
            });

        case DO_DELETE_PESERTA:
            return Object.assign({}, state, {
                deleting : true,
                deleted : false,
                message : {},
                error : null
            });
        case DONE_DELETE_PESERTA :
            return Object.assign({}, state, {
                deleting: false,
                deleted : true,
                message: action.payload.message,
                error: null
            });
        case FAILURE_DELETE_PESERTA:
            return Object.assign({}, state, {
                deleting: false,
                deleted : false,
                message: {},
                error : action.payload.error
            });
        case FINISH_DELETE_PESERTA:
            return Object.assign({}, state, {
                deleted : false
            });

        case DO_PREPARE_FORM :
            return Object.assign({}, state, {
                preparing : true,
                prepared : false,
                data : {},
                error : null
            });
        case DONE_PREPARE_FORM :
            return Object.assign({}, state, {
                preparing : false,
                prepared : true,
                idata : action.payload.data,
                error : null
            });
        case FAILURE_PREPARE_FORM :
            return Object.assign({}, state, {
                preparing : false,
                prepared : false,
                idata : {},
                error : action.payload.err
            });
        default:
            return state;
    }
}

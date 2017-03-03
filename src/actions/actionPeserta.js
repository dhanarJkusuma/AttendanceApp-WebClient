/**
 * Created by Dhanar J Kusuma on 02/03/2017.
 */
import {
    API_GET_PESERTA,
    API_UPDATE_PESERTA,
    API_DELETE_PESERTA,
    API_GET_KLOTER
} from '../utils/apis';
import axios from 'axios';

export const DO_REQUEST_PESERTA = 'DO_REQUEST_PESERTA';
export const DONE_REQUEST_PESERTA = 'DONE_REQUEST_PESERTA';
export const FAILURE_REQUEST_PESERTA = 'FAILURE_REQUEST_PESERTA';

export const DO_POST_PESERTA = 'DO_POST_PESERTA';
export const DONE_POST_PESERTA = 'DONE_POST_PESERTA';
export const FAILURE_POST_PESERTA = 'FAILURE_POST_PESERTA';

export const DO_UPDATE_PESERTA = 'DO_UPDATE_PESERTA';
export const DONE_UPDATE_PESERTA = 'DONE_UPDATE_PESERTA';
export const FAILURE_UPDATE_PESERTA = 'FAILURE_UPDATE_PESERTA';
export const FINISH_UPDATE_PESERTA = 'FINISH_UPDATE_PESERTA';

export const DO_DELETE_PESERTA = 'DO_DELETE_PESERTA';
export const DONE_DELETE_PESERTA = 'DONE_DELETE_PESERTA';
export const FAILURE_DELETE_PESERTA = 'FAILURE_DELETE_PESERTA';
export const FINISH_DELETE_PESERTA = 'FINISH_DELETE_PESERTA';

export const DO_PREPARE_FORM = 'DO_PREPARE_FORM';
export const DONE_PREPARE_FORM = 'DONE_PREPARE_FORM';
export const FAILURE_PREPARE_FORM = 'FAILURE_PREPARE_FORM';

export function getConfig(){
    return {
        headers: { 'Authorization': localStorage.getItem('absen-token') },
    };
}

export function processRequest(){
    return {
        type : DO_REQUEST_PESERTA
    }
}

export function doneRequest(data){
    return {
        type : DONE_REQUEST_PESERTA,
        payload : {
            data
        }
    }
}

export function failureRequest(err){
    return {
        type : FAILURE_REQUEST_PESERTA,
        payload : {
            error : err
        }
    }
}


export function processPost(){
    return {
        type : DO_POST_PESERTA
    }
}

export function donePost(data){
    return {
        type : DONE_POST_PESERTA,
        payload : {
            data : data
        }
    }
}

export function failurePost(err){
    return {
        type : FAILURE_POST_PESERTA,
        payload : {
            error : err
        }
    }
}


export function processUpdate(){
    return {
        type : DO_UPDATE_PESERTA
    }
}

export function doneUpdate(message){
    return {
        type : DONE_UPDATE_PESERTA,
        payload : {
            message : message
        }
    }
}

export function failureUpdate(err){
    return {
        type : FAILURE_UPDATE_PESERTA,
        payload : {
            err
        }
    }
}

export function finishUpdate() {
    return {
        type : FINISH_UPDATE_PESERTA
    }
}


export function processDelete(){
    return {
        type : DO_DELETE_PESERTA
    }
}

export function doneDelete(message){
    return {
        type : DONE_DELETE_PESERTA,
        payload : {
            message
        }
    }
}

export function failureDelete(err){
    return {
        type : FAILURE_DELETE_PESERTA
    }
}

export function finsihDelete(){
    return {
        type : FINISH_DELETE_PESERTA
    }
}


export function processGetForm(){
    return {
        type : DO_PREPARE_FORM
    }
}

export function doneGetForm(data){
    return {
        type : DONE_PREPARE_FORM,
        payload : {
            data
        }
    }
}

export function failureGetForm(err){
    return {
        type : FAILURE_PREPARE_FORM,
        payload : {
            err
        }
    }
}

export function getKloter(){
    return dispatch => {
        dispatch(processGetForm());
        axios.get(API_GET_KLOTER, getConfig())
            .then(function(res){
                var data = {
                    kloter: res.data.data
                };
                dispatch(doneGetForm(data));
            })
            .catch(err => console.log(err));
    }
}

export function getData(){
    return dispatch => {
        dispatch(processRequest());
        axios.get(API_GET_PESERTA, getConfig())
            .then(function(res){
                dispatch(doneRequest(res.data.data));
            })
            .catch(err => console.log(err));
    };
}

export function insertData(peserta){
    return dispatch => {
        dispatch(processPost());
        axios.post(API_GET_PESERTA, peserta, getConfig())
            .then(function(res){
                dispatch(donePost(res.data.data));
                dispatch(getData());
            })
            .catch(err => console.log(err));
    }
}

export function updateData(id, peserta){
    return dispatch => {
        dispatch(processUpdate());
        axios.post(API_UPDATE_PESERTA + id, peserta, getConfig())
            .then(function(res){
                dispatch(doneUpdate(res.data.message));
                setTimeout(function(){
                    dispatch(finishUpdate())
                },5000);
            })
            .catch(err => console.log(err));
    }
}

export function deleteData(id){
    return dispatch => {
        dispatch(processDelete());
        axios.post(API_DELETE_PESERTA + id, {}, getConfig())
            .then(function(res){
                console.log(res);
                dispatch(doneDelete(res.data.message));
                dispatch(getData());
            })
            .catch(err => console.log(err));
    }
}
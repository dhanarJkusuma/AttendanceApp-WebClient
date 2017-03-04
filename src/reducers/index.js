/**
 * Created by Dhanar J Kusuma on 27/02/2017.
 */
import { combineReducers } from 'redux';

import login from './loginReducer';
import kloter from './kloterReducer';
import location from './locationReducer';
import peserta from './pesertaReducer';
import muser from './muserReducer';

export default combineReducers({
    login,
    kloter,
    location,
    peserta,
    muser
});
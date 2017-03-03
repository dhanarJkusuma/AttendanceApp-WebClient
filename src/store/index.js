/**
 * Created by Dhanar J Kusuma on 26/02/2017.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import  reducers  from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;
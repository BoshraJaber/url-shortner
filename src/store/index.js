import { combineReducers, createStore } from 'redux';
import reducer from './reducer';


// const reducer = combineReducers({ reducer });

const store = () => {
    return createStore(reducer);
}

export default store();
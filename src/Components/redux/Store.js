import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import promiseMiddleware from "redux-promise";

const Store = createStore(reducer, applyMiddleware(promiseMiddleware));
export default Store;
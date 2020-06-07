import {combineReducers} from 'redux';
import articleReducer from './ArticleReducer'

const createReducer = () =>
    combineReducers({
        articleReducer
    });

export default createReducer;

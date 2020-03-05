import { combineReducers } from "redux";
import { ADD_ARTICLE, ADD_USER } from "./actions";

const initialUserState = {
    jan: 0,
    gosia: 0
};

const users = (state = initialUserState, action) => {
    if (action.type === ADD_ARTICLE) {
        return {
            ...state,
            [action.payload.userId]: state[action.payload.userId] + 1
        }
    }

    if (action.type === ADD_USER) {
        return {
            ...state,
            [action.payload]: 0
        }
    }

    return state;
};

const articles = (state = [], action) => {
    if (action.type === ADD_ARTICLE) {
        return [...state, action.payload.title]
    }

    return state;
};

export default combineReducers({
    users,
    articles
});

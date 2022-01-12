import { combineReducers } from "redux";
import auth from './auth';
import { History } from "history";
import { connect } from "http2";
import { connectRouter } from "connected-react-router";

const reducer = (history: History<unknown>) => combineReducers({
    auth,
    router: connectRouter(history),
});

export default reducer;
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import { routerMiddleware } from "connected-react-router";
import history from "../../history";
import TokenService from "../../services/TokenService";
import { fail } from "./auth";

const create = () => {
    const token = TokenService.get();
    const sageMiddleware = createSagaMiddleware();
    const store = createStore(
    reducer(history), 
    {
        auth: {
            token,
            loading: false,
            error: null,
        },
    },
    composeWithDevTools(applyMiddleware(sageMiddleware, routerMiddleware(history))));
    sageMiddleware.run(rootSaga);
    return store;
}

export default create;
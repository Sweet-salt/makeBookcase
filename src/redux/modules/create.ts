import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";


const create = () => {
    const sageMiddleware = createSagaMiddleware();
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(sageMiddleware)));
    sageMiddleware.run(rootSaga);
    return store;
}

export default create;
import { createActions, handleAction, handleActions } from "redux-actions";

interface AuthState{
    token: string | null;
    loading: boolean;
    error: Error | null;
}

const initialState: AuthState = {
    token: null,
    loading: false,
    error: null,
};

const prefix = "bookcase/auth";

export const {pending, success, fail} = createActions(
    'PENDING', 
    'SUCCESS', 
    'FAIL', 
    {prefix}
);

const reducer = handleActions<AuthState, string>({
   PENDING: (state) => ({
    ...state,
    loading: true,
    error: null,
   }), 
   SECCESS: (state, action) => ({
    token: action.payload,
    loading: false,
    error: null,
   }), 
   FAIL: (state, action: any) => ({
    ...state,
    loading: false,
    error: action.payload
   }), 
}, initialState, {prefix});

export default reducer;

//saga
export function* authSaga() {
    
}
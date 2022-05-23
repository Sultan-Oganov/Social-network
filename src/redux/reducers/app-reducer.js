import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initialize = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    // const promise2 = dispatch(getAuthUserData());
    // const promise3 = dispatch(getAuthUserData());

    //Если нужно дождаться все промисы - Promise.all
    // Promise.all([promise, promise2, promise3])
    //     .then(() => {
    //         dispatch(initializedSuccess());
    //     })

    promise.then(() => {
        dispatch(initializedSuccess());
    })

}

export default appReducer;
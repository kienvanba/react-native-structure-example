import * as types from './types';

export const set = (settings = {}) => async dispatch => {
    dispatch({
        type: types.APP_SET,
        payload: settings,
    });

    return Promise.resolve();
};

export const login = history => async dispatch => {
    dispatch({
        type: types.APP_LOGIN,
        payload: { history },
    });

    return Promise.resolve();
};

export const reset = history => async dispatch => {
    dispatch({
        type: types.APP_RESET,
        payload: { history },
    });

    return Promise.resolve();
};

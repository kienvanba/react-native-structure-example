import { initialSettings } from 'configs/constants';
import * as types from './types';
import { AppURLs } from 'configs/urls';
import Settings from 'services/setting';

const initialState = {
    ...initialSettings,
    hasLoggedIn: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.APP_SET:
            Settings.set(action.payload);
            return {
                ...state,
                ...action.payload,
            };
        case types.APP_LOGIN:
            if (action.payload && action.payload.history) {
                const { history } = action.payload;
                setTimeout(() => history.replace(AppURLs.main), 0);
            }
            return {
                ...state,
                hasLoggedIn: true,
            };
        case types.APP_RESET:
            if (action.payload && action.payload.history) {
                const { history } = action.payload;
                setTimeout(() => history.replace(AppURLs.root), 0);
            }
            Settings.reset();
            return initialState;
        default:
            return state;
    }
};

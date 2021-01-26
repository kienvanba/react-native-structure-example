import apisauce from 'apisauce';
import store from 'modules/store';
import { ErrorCodes, ErrorMessages } from 'configs/errors';

let instance = null;

const handleWhenTokenIsExpired = async () => {
    const { hasLoggedIn } = store.getState().app;
    if (!hasLoggedIn) {
        return;
    }
    store.dispatch({ type: APP_RESET });
    await wait(1000);
    RNRestart.Restart();
};

export const init = () => {
    instance = apisauce.create({
        baseURL: 'https://mcd-api-staging.pplus.vn/v1',
        timeout: 20000,
    });

    instance.addResponseTransform(response => {
        if (response.ok) {
            if (response.data && response.data.success) {
                response.data = {
                    error: null,
                    message: null,
                    data: response.data.data,
                };
            } else {
                const errorCode = get(
                    response,
                    'data.data.code',
                    ErrorCodes.DEFAULT,
                );
                if (errorCode === ErrorCodes.EXPIRED_TOKEN) {
                    handleWhenTokenIsExpired();
                }

                response.data = {
                    error: errorCode,
                    message: response.data.data.message,
                    data: null,
                };
            }
        } else {
            response.data = {
                error: -1,
                message: I18n.t(
                    ErrorMessages[response.problem] ||
                        ErrorMessages[ErrorCodes.DEFAULT],
                ),
                data: null,
            };
        }
    });

    instance.addAsyncRequestTransform(config => async () => {
        const {
            platform,
            appVersion,
            language,
            accessToken,
            longitude,
            latitude,
        } = store.getState().app;

        const location = /*(await getAndSave()) ||*/ { longitude, latitude };
        const locationHeader = `${location.latitude},${location.longitude}`;

        config.headers = {
            'Content-Type': 'application/json',
            'X-Env': `${platform}|${appVersion}|${language}`,
            Authorization: accessToken ? `Bearer ${accessToken}` : null,
            'X-Location': locationHeader,
        };
    });
};

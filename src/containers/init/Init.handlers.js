import { useEffect } from 'react';
import { useHistory } from 'react-router-native';
import Settings from 'services/setting';
import store from 'modules/store';
import { APP_SET } from 'src/modules/app/types';
import { wait } from 'src/utils';
import { waitForNavigatingToMain, triggerInitialized } from 'services/app';
import { AppURLs } from 'configs/urls';
import { Toast } from 'ui';

export const navigateApp = async ({ history }) => {
    const { accessToken } = store.getState().app;
    if (accessToken) {
        store.dispatch({
            type: APP_LOGIN,
            payload: { history },
        });
    } else {
        history.replace(AppURLs.auth);
    }
};

export default () => {
    const history = useHistory();

    const loadSettings = async () => {
        const settings = await Settings.get();
        store.dispatch({
            type: APP_SET,
            payload: settings,
        });
        return Promise.resolve(settings);
    };

    const handleServices = async services => {
        const result = await (async function queue(
            [current, ...others] = services,
            responses = [],
        ) {
            const { service, args } = current || {};
            if (!service) return Promise.resolve(responses);

            const res = await service.apply(args);
            return queue(others, [...responses, res]);
        })();

        return Promise.resolve(result);
    };

    const requestPermissionsOnTime = async () => {
        await waitForNavigatingToMain();
        await wait(2000);

        Toast.show('request permissions if need');
    };

    useEffect(() => {
        const loadAllServices = async () => {
            await handleServices([
                {
                    service: loadSettings,
                    args: [],
                },
            ]);
            navigateApp({ history });
            requestPermissionsOnTime();
            triggerInitialized();
        };

        loadAllServices();
    }, []);
};

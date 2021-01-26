import store from 'modules/store';
import { EventRegister } from 'react-native-event-listeners';

let hasInitialized = false;
let hasNavigatedToLogin = false;
let hasNavigatedToMain = false;
let navigation = null;

export const triggerInitialized = () => {
    hasInitialized = true;
    EventRegister.emitEvent('hasInitialized');
};

export const waitForInitializing = () =>
    new Promise(resolve => {
        if (hasInitialized) {
            resolve({
                hasLoggedIn: store.getState().app.hasLoggedIn,
            });
            return;
        }

        const handleEvent = () => {
            hasInitialized = true;
            resolve({
                hasLoggedIn: store.getState().app.hasLoggedIn,
            });
            EventRegister.removeEventListener('hasInitialized', handleEvent);
        };

        EventRegister.addEventListener('hasInitialized', handleEvent);
    });

export const triggerNavigatedToLogin = () => {
    hasNavigatedToLogin = true;
    EventRegister.emitEvent('hasNavigatedToLogin');
};

export const waitForNavigatingToLogin = () =>
    new Promise(resolve => {
        if (hasNavigatedToLogin) {
            resolve();
            return;
        }

        const handleEvent = () => {
            hasNavigatedToLogin = true;
            resolve();
            EventRegister.removeEventListener(
                'hasNavigatedToLogin',
                handleEvent,
            );
        };

        EventRegister.addEventListener('hasNavigatedToLogin', handleEvent);
    });

export const triggerNavigatedToMain = () => {
    hasNavigatedToMain = true;
    EventRegister.emitEvent('hasNavigatedToMain');
};

export const waitForNavigatingToMain = () =>
    new Promise(resolve => {
        if (hasNavigatedToMain) {
            resolve();
            return;
        }

        const handleEvent = () => {
            hasNavigatedToMain = true;
            resolve();
            EventRegister.removeEventListener(
                'hasNavigatedToMain',
                handleEvent,
            );
        };

        EventRegister.addEventListener('hasNavigatedToMain', handleEvent);
    });

export const triggerNavigationReady = appNavigation => {
    navigation = appNavigation;
    EventRegister.emitEvent('hasNavigation');
};

export const waitForNavigationReady = () =>
    new Promise(resolve => {
        if (navigation) {
            resolve(navigation);
            return;
        }

        const handleEvent = () => {
            resolve(navigation);
            EventRegister.removeEventListener('hasNavigation', handleEvent);
        };

        EventRegister.addEventListener('hasNavigation', handleEvent);
    });

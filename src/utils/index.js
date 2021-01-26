import Loading from 'components/popup/loading';

export const wait = (time = 0) =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });

export const sideEffect = services => async func => {
    const { showLoading = false } = services || {};

    if (showLoading) {
        Loading.show();
    }
    const result = await func();
    if (showLoading) {
        await Loading.hide();
    }

    return result;
};

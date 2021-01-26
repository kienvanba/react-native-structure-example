import Storage from 'services/storage';
import { initialSettings } from 'configs/constants';
import { omit, last } from 'lodash';
import version from './version';

const storage = Storage.getInstance();
const latestVersion = last(version);

const key = 'settings';
const initial = {
    version: latestVersion,
    ...initialSettings,
};

const isOutdate = currentVersion => latestVersion > currentVersion;

const exportData = data => {
    const keys = Object.keys(initial);
    const result = {};
    keys.forEach(dataKey => {
        result[dataKey] = data[dataKey];
    });

    return omit({ ...initial, ...result }, 'version');
};

const importData = data => {
    const keys = Object.keys(initial);
    const result = {};
    keys.forEach(dataKey => {
        result[dataKey] = data[dataKey];
    });

    return { ...initial, ...result };
};

export const reset = () => {
    storage.remove({ key });
};

export async function get() {
    return new Promise(resolve => {
        storage
            .load({ key })
            .then(data => {
                if (isOutdate(data.version)) {
                    set(initial);
                    resolve(exportData(initial));
                } else {
                    resolve(exportData(data));
                }
            })
            .catch(() => {
                set(initial);
                resolve(exportData(initial));
            });
    });
}

export async function set(data = {}) {
    const savedData = await get();
    const mergedData = importData({
        ...savedData,
        ...data,
    });
    storage.save({ key, data: mergedData });

    return Promise.resolve(mergedData);
}

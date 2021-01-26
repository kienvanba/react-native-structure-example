import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

let storage = null;

const getInstance = () => {
    if (!storage) {
        storage = new Storage({
            size: 1000,
            storageBackend: AsyncStorage,
            defaultExpires: null,
            enableCache: true,
        });
    }

    return storage;
};

export { getInstance };

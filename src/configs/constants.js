import I18n from 'configs/i18n';
import VersionInfo from 'react-native-version-info';

export const AppVersion = Number(VersionInfo.buildVersion);

export const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: 'blue',
    },
    headerTintColor: 'white',
    headerBackTitle: null,
};

export const initialSettings = {
    language: I18n.defaultLocale,
    appVersion: AppVersion,
    latestVersion: 1,
    minVersion: 1,
    platform: Platform.OS,
    notificationToken: '',
    longitude: '',
    latitude: '',
    androidURL: '',
    iosURL: '',
    accessToken: '',
};

export const api = {};

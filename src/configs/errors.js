import {
    NONE,
    CLIENT_ERROR,
    SERVER_ERROR,
    TIMEOUT_ERROR,
    CONNECTION_ERROR,
    NETWORK_ERROR,
    CANCEL_ERROR,
} from 'apisauce';

export const ErrorCodes = {
    DEFAULT: 'DEFAULT',
    INTERNET: 'INTERNET',
    EXPIRED_TOKEN: 5,
};

export const ErrorMessages = {
    [CLIENT_ERROR]: 'network.clientError',
    [SERVER_ERROR]: 'network.serverError',
    [TIMEOUT_ERROR]: 'network.timeout',
    [CONNECTION_ERROR]: 'network.serverAddressError',
    [NETWORK_ERROR]: 'network.internetError',
    [CANCEL_ERROR]: 'network.requestCancelled',
    [NONE]: 'network.defaultError',
};

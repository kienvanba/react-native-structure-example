import { useEffect } from 'react';
import { Platform, NativeModules, NativeEventEmitter } from 'react-native';
import { APIConsts, ErrorCodes } from 'src/common/consts';

const momoSDK = NativeModules.RNMomosdk;
const EventEmitter = new NativeEventEmitter(momoSDK);

export const buildMomoPaymentBody = (momoPaymentData = {}) => {
  return {
    ...momoPaymentData,
    ...Platform.select({
      ios: { appScheme: momoPaymentData.merchantcode },
      android: {},
    }),
  };
};

export const unsubscribeMomo = () => {
  if (Platform.OS === 'ios')
    EventEmitter.removeListener('RCTMoMoNoficationCenterRequestTokenReceived');
};

export const useUnsubscribeMomo = () =>
  useEffect(() => () => {
    unsubscribeMomo();
  });

export const mapToMomo = (Momo = {}) => ({
  fromApp: Momo.fromapp,
  token: Momo.data,
  phone: Momo.phonenumber,
  message: Momo.message,
});

export const normalizeMomoResponse = (response) => {
  if (response?.status === APIConsts.MOMO.status.SUCCESS) {
    return {
      errorCode: null,
      errorMessage: null,
      data: mapToMomo(response),
    };
  }

  return {
    errorCode: ErrorCodes.MOMO,
    errorMessage: response?.message,
  };
};

import { Platform, NativeModules, NativeEventEmitter } from 'react-native';
import RNMomoSDK from 'react-native-momosdk';
import {
  buildMomoPaymentBody,
  unsubscribeMomo,
  normalizeMomoResponse,
} from './utils';

const momoSDK = NativeModules.RNMomosdk;
const EventEmitter = new NativeEventEmitter(momoSDK);

export default {
  requestPayment: ({ momoPaymentData }) =>
    new Promise((resolve) => {
      const momoPaymentBody = buildMomoPaymentBody(momoPaymentData);

      if (Platform.OS === 'android') {
        RNMomoSDK.requestPayment(momoPaymentBody)
          .then((response) => resolve(normalizeMomoResponse(response)))
          .catch((error) => resolve(normalizeMomoResponse(error)));
      } else {
        EventEmitter.addListener(
          'RCTMoMoNoficationCenterRequestTokenReceived',
          (response) => {
            resolve(normalizeMomoResponse(response));
            unsubscribeMomo();
          },
        );
        RNMomoSDK.requestPayment(momoPaymentBody);
      }
    }),
};

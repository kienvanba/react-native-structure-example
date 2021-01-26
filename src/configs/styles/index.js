import { StyleSheet } from 'react-native';

export const Colors = {
    primary: '#FD656A',
    primaryLight: '#FD656A30',
    secondary: '#F40009',
    white: '#FFFFFF',
    whiteSecondary: '#FFFFFF64',
    black: '#000000',
    blackSecondary: '#00000064',
    popupOverlay: 'rgba(0, 0, 0, 0.75)',
    green: '#77D21A',
    gray: '#B7B7B7',
    darkGray: '#4F4F4F',
    lightBlue: '#add8e6',
    transparent: 'transparent',
};

export const Sizes = {
    small: 4,
    x: 8,
    x2: 16,
    x3: 24,
    x4: 32,
    x5: 40,
    x6: 48,
    x7: 56,
    x8: 64,
    x9: 72,
    defaultWidth: 300,
};

export const Layout = {
    defaultWidth: 300,
    defaultHeight: 45,
    defaultRadius: 10,
    smallRadius: 4,
    smallTextSize: 12,
    normalTextSize: 15,
    mediumTextSize: 17,
    largeTextSize: 24,
    largeTitleTextSize: 36,
};

export const FontWeight = {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    black: '900',
};

export default StyleSheet.create({
    fontSmallSize: {
        fontSize: Layout.smallTextSize,
    },
    fontNormalSize: {
        fontSize: Layout.normalTextSize,
    },
    fontMediumSize: {
        fontSize: Layout.mediumTextSize,
    },
    fontLargeSize: {
        fontSize: Layout.largeTextSize,
    },
    fontLight: {
        fontFamily: 'Roboto-Light',
        fontWeight: FontWeight.light,
        fontStyle: 'normal',
    },
    fontLightItalic: {
        fontFamily: 'Roboto-LightItalic',
        fontWeight: FontWeight.light,
        fontStyle: 'italic',
    },
    fontRegular: {
        fontFamily: 'Roboto-Regular',
        fontWeight: FontWeight.regular,
        fontStyle: 'normal',
    },
    fontRegularItalic: {
        fontFamily: 'Roboto-Italic',
        fontWeight: FontWeight.regular,
        fontStyle: 'italic',
    },
    fontMedium: {
        fontFamily: 'Roboto-Medium',
        fontWeight: FontWeight.medium,
        fontStyle: 'normal',
    },
    fontMediumItalic: {
        fontFamily: 'Roboto-MediumItalic',
        fontWeight: FontWeight.medium,
        fontStyle: 'italic',
    },
    fontBold: {
        fontFamily: 'Roboto-Bold',
        fontWeight: FontWeight.bold,
        fontStyle: 'normal',
    },
    fontBoldItalic: {
        fontFamily: 'Roboto-BoldItalic',
        fontWeight: FontWeight.bold,
        fontStyle: 'italic',
    },
    fontBlack: {
        fontFamily: 'Roboto-Black',
        fontWeight: FontWeight.black,
        fontStyle: 'normal',
    },
    fontBlackItalic: {
        fontFamily: 'Roboto-BlackItalic',
        fontWeight: FontWeight.black,
        fontStyle: 'italic',
    },
});

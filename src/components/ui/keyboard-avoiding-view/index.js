import React from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';

const offset = Platform.select({
    ios: 0,
    android: -500,
});

export default props => (
    <KeyboardAvoidingView keyboardVerticalOffset={offset} {...props} />
);

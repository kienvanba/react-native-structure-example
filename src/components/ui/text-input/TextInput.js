import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from '@shoutem/ui';
import Styles from 'styles';
import styles from './TextInput.styles';

export default React.forwardRef(({ style, ...props }, ref) => (
    <TextInput
        style={StyleSheet.flatten([Styles.fontNormal, styles.textInput, style])}
        allowFontScaling={false}
        ref={ref}
        {...props}
    />
));

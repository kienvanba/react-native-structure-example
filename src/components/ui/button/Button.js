import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonUI, Text } from '@shoutem/ui';
import { StyleSheet } from 'react-native';
import Styles from 'styles';
import styles from './Button.styles';

const getStyles = size => {
    if (size === 'normal') {
        return styles.default;
    }
    if (size === 'fullWidth') {
        return [styles.full, styles.clearRadius];
    }
    return {};
};

const Button = ({
    style,
    text,
    textStyle,
    size,
    children,
    disabled,
    ...props
}) => (
    <ButtonUI
        disabled={disabled}
        style={StyleSheet.flatten([
            styles.button,
            disabled && styles.buttonDisable,
            getStyles(size),
            style,
        ])}
        {...props}
    >
        {text && (
            <Text
                style={StyleSheet.flatten([
                    Styles.fontMedium,
                    Styles.fontMediumSize,
                    styles.text,
                    textStyle,
                ])}
            >
                {text}
            </Text>
        )}
        {children}
    </ButtonUI>
);

Button.propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(['normal', 'fullWidth', 'unset']),
    disabled: PropTypes.bool,
};
Button.defaultProps = {
    text: null,
    size: 'normal',
    disabled: false,
};

const sizes = {
    NORMAL: 'normal',
    FULL_WIDTH: 'fullWidth',
    UNSET: 'unset',
};

Object.keys(sizes).forEach(size => {
    Button[size] = sizes[size];
});

export default Button;

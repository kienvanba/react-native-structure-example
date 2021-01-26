import React from 'react';
import { View as AnimationView } from 'react-native-animatable';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import styles from './FadeContainer.styles';

const FadeContainer = ({ style, fadeOut, children, ...props }) => {
    return (
        <AnimationView
            {...props}
            animation={fadeOut ? 'fadeOut' : 'fadeIn'}
            style={StyleSheet.flatten([styles.container, style])}
        >
            {children}
        </AnimationView>
    );
};

FadeContainer.propTypes = {
    style: PropTypes.any,
    children: PropTypes.any,
    fadeOut: PropTypes.bool,
};

FadeContainer.defaultProps = {
    children: null,
    style: null,
    fadeOut: false,
};

export default FadeContainer;

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text as TextUI } from '@shoutem/ui';
import Styles from 'styles';
import styles from './Text.styles';

const mapToSize = {
    small: Styles.fontSmallSize,
    normal: Styles.fontNormalSize,
    medium: Styles.fontMediumSize,
    large: Styles.fontLargeSize,
};

const getTypeStyle = type => {
    let types;

    if (Array.isArray(type)) types = type;
    else if (type.includes(',')) types = type.split(',');
    else types = [type];

    if (types.includes('light')) {
        if (types.includes('italic')) return Styles.fontLightItalic;
        return Styles.fontLight;
    }

    if (types.includes('regular')) {
        if (types.includes('italic')) return Styles.fontRegularItalic;
        return Styles.fontRegular;
    }

    if (types.includes('medium')) {
        if (types.includes('italic')) return Styles.fontMediumItalic;
        return Styles.fontMedium;
    }

    if (types.includes('bold')) {
        if (types.includes('italic')) return Styles.fontBoldItalic;
        return Styles.fontBold;
    }

    if (types.includes('black')) {
        if (types.includes('italic')) return Styles.fontBlackItalic;
        return Styles.fontBlack;
    }

    return Styles.fontRegular;
};

const Text = ({ style, type, size, ...props }) => (
    <TextUI
        style={StyleSheet.flatten([
            styles.color,
            getTypeStyle(type),
            mapToSize[size],
            style,
        ])}
        {...props}
    />
);

Text.size = {
    SMALL: 'small',
    NORMAL: 'normal',
    MEDIUM: 'medium',
    LARGE: 'large',
};

Text.propTypes = {
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    size: PropTypes.oneOf(Object.keys(Text.size).map(key => Text.size[key])),
};
Text.defaultProps = {
    type: 'regular',
    size: 'normal',
};

export default Text;

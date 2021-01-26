import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import DefaultImage from 'src/images/default-thumbnail.jpg';

const isEmptySource = source => {
    if (!source) return true;

    if (Object.keys(source).includes('uri') && !source.uri) return true;

    return false;
};

const Image = forwardRef(({ source, ...props }, ref) => {
    if (isEmptySource(source)) {
        return (
            <FastImage
                source={DefaultImage}
                resizeMode="cover"
                {...props}
                ref={ref}
            />
        );
    }

    return <FastImage source={source} {...props} ref={ref} />;
});

Image.propTypes = {
    source: PropTypes.any,
};

Image.defaultProps = {
    source: null,
};

export default Image;

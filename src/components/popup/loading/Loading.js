import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Loading.styles';
import { FadeContainer } from 'components/popup/container';
import { Colors } from 'styles';
import { wait } from 'src/utils';
// import { setDisable } from 'services/back-press';

const fadeDuration = 200;

const Loading = () => {
    const [show, setShow] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    Loading.showLoading = () => {
        // setDisable(true);
        setFadeOut(false);
        setShow(true);
    };

    Loading.hideLoading = async () => {
        setFadeOut(true);
        await wait(fadeDuration);
        setShow(false);
        // setDisable(false);
    };

    useEffect(() => {
        Loading.instance = this;
        return () => {
            Loading.instance = null;
        };
    });

    return show ? (
        <FadeContainer
            fadeOut={fadeOut}
            duration={fadeDuration}
            style={styles.container}
        >
            <View style={styles.spinnerContainer}>
                <ActivityIndicator size="large" color={Colors.white} />
            </View>
        </FadeContainer>
    ) : null;
};

Loading.propTypes = {
    show: PropTypes.bool,
    fadeOut: PropTypes.bool,
};

Loading.defaultProps = {
    show: false,
    fadeOut: false,
};

Loading.show = () => {
    if (Loading.instance) {
        Loading.showLoading();
    }
};

Loading.hide = () => {
    if (Loading.instance) {
        Loading.hideLoading();
    }
};

Loading.fadeDuration = 200;

export default Loading;

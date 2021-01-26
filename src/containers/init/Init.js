import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './Init.styles';
import { Colors } from 'styles';
import useHandler from './Init.handlers';

const Init = () => {
    useHandler();

    return (
        <View style={styles.container}>
            <ActivityIndicator color={Colors.primary} size="large" />
        </View>
    );
};

export default Init;

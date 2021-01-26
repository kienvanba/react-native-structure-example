import React from 'react';
import { View, TouchableOpacity, Text } from 'ui';

import styles from './Home.styles';
import useHandlers from './Home.handlers';

const Home = () => {
    const { handleToDetail } = useHandlers();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleToDetail}>
                <Text>To Detail</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

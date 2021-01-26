import React from 'react';
import { View, TouchableOpacity, Text } from 'ui';

import styles from './Login.styles';
import useHandlers from './Login.handlers';

const Login = () => {
    const { handleLogin, handleForgetPassword } = useHandlers();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForgetPassword}>
                <Text>ForgetPassword</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from 'containers/login';
import TestContainer from 'containers/test';
import { defaultNavigationOptions } from 'configs/constants';
import { triggerNavigatedToLogin } from 'src/services/app';

export default () => {
    const LoginStack = createStackNavigator(
        {
            Login: {
                screen: Login,
                navigationOptions: {
                    headerShown: false,
                },
            },
            ForgetPassword: {
                screen: TestContainer,
                navigationOptions: {
                    title: 'Forget Password',
                },
            },
        },
        {
            initialRouteName: 'Login',
            defaultNavigationOptions: defaultNavigationOptions,
        },
    );

    const Auth = createAppContainer(LoginStack);

    useEffect(() => {
        triggerNavigatedToLogin();
    }, []);

    return <Auth />;
};

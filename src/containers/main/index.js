import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

import store from 'modules/store';
import { defaultNavigationOptions } from 'configs/constants';
import { Colors, Sizes } from 'styles';
import Home from 'containers/home';
import TestContainer from 'containers/test';
import { triggerNavigatedToMain } from 'services/app';

export const createTabBarIcon = iconName => {
    return ({ tintColor }) => (
        <Icon name={iconName} size={Sizes.x2} color={tintColor} />
    );
};

export const createTab = (render, name, title) =>
    createStackNavigator(
        {
            [name]: {
                screen: render,
                navigationOptions: {
                    title: title,
                },
            },
        },
        {
            defaultNavigationOptions: defaultNavigationOptions,
        },
    );

export default () => {
    const createTabOptions = ({ tabBarIcon, tabBarLabel, title }) => ({
        ...defaultNavigationOptions,
        tabBarIcon,
        tabBarLabel,
        title,
    });

    const HomeStack = createStackNavigator(
        {
            Home: {
                screen: Home,
                navigationOptions: {
                    title: 'Home',
                },
            },
            Detail: {
                screen: TestContainer,
                navigationOptions: {
                    title: 'Detail',
                },
            },
        },
        {
            initialRouteName: 'Home',
            defaultNavigationOptions: defaultNavigationOptions,
        },
    );

    const BottomNavigation = createBottomTabNavigator(
        {
            Home: {
                screen: HomeStack,
                navigationOptions: createTabOptions({
                    tabBarIcon: createTabBarIcon('home'),
                    tabBarLabel: 'Home',
                }),
            },
            Profile: {
                screen: createTab(TestContainer, 'Profile', 'Profile'),
                navigationOptions: createTabOptions({
                    tabBarIcon: createTabBarIcon('user'),
                    tabBarLabel: 'Profile',
                }),
            },
            More: {
                screen: createTab(TestContainer, 'More', 'More'),
                navigationOptions: createTabOptions({
                    tabBarIcon: createTabBarIcon('ellipsis1'),
                    tabBarLabel: 'More',
                }),
            },
        },
        {
            initialRouteName: 'Home',
            tabBarOptions: {
                activeTintColor: Colors.secondary,
                inactiveTintColor: Colors.black,
                style: {
                    borderTopWidth: 0.5,
                    borderTopColor: Colors.secondary,
                },
            },
        },
    );

    const Main = createAppContainer(BottomNavigation);

    useEffect(() => {
        triggerNavigatedToMain();
    }, []);

    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
};

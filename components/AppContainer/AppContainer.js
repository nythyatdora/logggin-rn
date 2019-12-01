import React from 'react';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';

import {
    createAppContainer
} from 'react-navigation';

import {
    createDrawerNavigator
} from 'react-navigation-drawer';

const DrawerNavigation = createDrawerNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
}, {
    
});

const AppDrawerNavigator = createAppContainer(DrawerNavigation);

export default function AppContainer() {
    return (<>
        <AppDrawerNavigator />
    </>);
}

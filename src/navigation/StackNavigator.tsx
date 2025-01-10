// src/navigation/StackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddProduct from '../screens/AddProduct';
import ShowProducts from '../screens/ShowProducts';
import SearchProducts from '../screens/SearchProducts';
import UpdateProduct from '../screens/UpdateProduct';
import DeleteProduct from '../screens/DeleteProduct';
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
        <Stack.Screen name="DeleteProduct" component={DeleteProduct} />
    </Stack.Navigator>
);

export default StackNavigator;

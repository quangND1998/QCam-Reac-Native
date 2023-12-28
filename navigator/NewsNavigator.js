import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FarmDetail from '../components/Farms/FarmDetail';
import DrawerNavigator from './DrawerNavigator';
import BottomNavigator from './BottomNavigator';
const Stack = createNativeStackNavigator();
const NewsNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen  name="newDetail" component={FarmDetail} />
        </Stack.Navigator>
    );
}


export default NewsNavigator;
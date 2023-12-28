import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login/Login';
import { useLogin } from '../context/LoginProvider';
import DrawerNavigator from './DrawerNavigator';
import BottomNavigator from './BottomNavigator';
import NewsNavigator from './NewsNavigator';
import FarmDetail from '../components/Farms/FarmDetail';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen initialRouteName="Login" name="Login" component={Login} />

        </Stack.Navigator>
    );
}


const MainNavigator = () => {
        const { isLoggedIn } = useLogin();
    return isLoggedIn ?
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomNavigator}
                options={{ headerShown: false }}
            />
              {/* <Stack.Screen
                name="New"
                component={NewsNavigator}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen name="newDetail" options={{ headerShown: false }} component={FarmDetail} />
        </Stack.Navigator> : <StackNavigator />;
    // const { isLoggedIn } = useLogin();
    // return isLoggedIn ? <BottomNavigator /> : <StackNavigator />;
};
export default MainNavigator;
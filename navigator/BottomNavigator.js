import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EmojiHappy, Home, User, More, DocumentText } from 'iconsax-react-native';
import { View, Text, StyleSheet, Image } from 'react-native';
import HomeScreen from '../components/Home/Home';
import OrderScreen from '../components/Order/Index';
import UserScreen from '../components/User/Index';
import AddScreen from '../components/Add/Index';
const Tab = createBottomTabNavigator();
const ImageHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
      <Image
        style={StyleSheet.absoluteFill}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
      />
    </View>
);

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            backBehavior="history"
            style={styles.tabcontain}
            screenOptions={{
                tabBarActiveTintColor: '#F78F43',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/icon/home.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="Order"
                component={OrderScreen}
                options={{
                    tabBarLabel: 'Đơn hàng',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/icon/order.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="checkin"
                component={UserScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Check In',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/icon/qrcode.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/icon/user.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={AddScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Thêm',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/icon/more.png')} />
                    ),
                }}
            />
        </Tab.Navigator>
    );

}
const styles = StyleSheet.create({
    tabcontain:{
        padding : '10px',
        margin: '10px'
    }
  });
export default BottomNavigator;
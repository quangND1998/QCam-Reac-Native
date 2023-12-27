//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ToastAndroid, Keyboard } from 'react-native';
import { Center, Container, Heading, Button, Text, Box, Stack, Spinner, Input, Icon, ZStack, Image, HStack, VStack, Pressable, useToast, AspectRatio } from 'native-base';
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, logoutAction } from '../../store/actions/auth';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { getToken } from '../../common/asynStorage'
import { useLogin } from '../../context/LoginProvider';
// create a component
const Login = ({ navigation }) => {
    const { setIsLoggedIn, profile } = useLogin();
    const toast = useToast();
    const [state, setSate] = React.useState({ show: false, code: '', password: '' });
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();
    const handleClick = () => {
        setSate(prevState => {
            return { ...prevState, show: !state.show }
        })
        console.log(state)
    }
    const changeCode = (value) => {
        setSate(prevState => {
            return { ...prevState, code: value }
        })
    }
    const changePassword = (value) => {
        setSate(prevState => {
            return { ...prevState, password: value }
        })
    }
    const submitHandler = () => {
        console.log(state)
        dispatch(loginAction(
            state.code, state.password,
            () => {
                toast.show({
                    title: "Login successfully",
                    // status: "success",
                    description: "Thanks for signing up with us."
                })
                // console.log(navigation)
                setIsLoggedIn(true)
                Keyboard.dismiss();

            },
            () => {
                toast.show({
                    title: "Something went wrong, please try again!",
                    // status: "error",
                    description: "Something went wrong, please try again!"
                })
                setIsLoggedIn(false)
            },
        ));
    }
    return (
        <Stack space={4} w="100%" alignItems="center" className="relative h-full" >
            <View class="bottom-0 h-full">
                <Image source={require('../../assets/images/banner3_login.png')} class="m-auto bottom-0 absolute " alt="" />
            </View>
            <View className="ion-padding mx-6 mt-[60px] absolute top-0 left-0 w-full h-full">
                <View class="mb-5 pb-5 logo ">
                    <Image source={require('../../assets/images/logo2.png')} class="m-auto" alt="" />
                </View>
                <Input w={{
                    base: "75%",
                    md: "25%"
                }} onChangeText={changeCode} className="bg-gray-50 border border-[#F78F43] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Mã HĐ/SĐT" />
                <Input type={state.show ? "text" : "password"} w={{
                    base: "75%",
                    md: "25%"
                }} className="bg-gray-50 border border-[#F78F43] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChangeText={changePassword} placeholder="Password" />
                <Button className="w-full mt-6 text-white bg-[#F78F43] focus:text-[#F78F43] rounded-xl" size='md' text="submit" onPress={submitHandler}>Login</Button>
            </View>

        </Stack>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Login;

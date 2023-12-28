import React, { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import { StyleSheet, TouchableOpacity, Linking, Keyboard, View } from 'react-native';
import { Center, Container, Heading, Button, Text, Box, Stack, Input, SearchBar, Icon, Spacer, ZStack, Image, HStack, VStack, Pressable, FlatList, Avatar, useToast } from 'native-base';
import { useDispatch, useSelector } from 'react-redux'
import { EmojiHappy } from 'iconsax-react-native';
import { Camera, useCameraDevices, } from 'react-native-vision-camera';
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
const ScanScreen = ({ navigation, route }) => {
    // const { hasPermission, requestPermission } = CameraPermissionRequestResult()
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back
    useEffect(() => {
        // requestPermission()
    }, [])
    if (device == null) return <View />
    return (
        <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
        />
    )
}


const styles = StyleSheet.create({
    cardcontainer: {
        flex: 1
    }
})


export default ScanScreen;
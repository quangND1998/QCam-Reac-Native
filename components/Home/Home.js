import React, { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import { StyleSheet, TouchableOpacity, Linking, Keyboard, View } from 'react-native';
import { Center, Container, Heading, Button, Text, Box, Stack, Input, SearchBar, Icon, Spacer, ZStack, Image, HStack, VStack, Pressable, FlatList, Avatar, useToast } from 'native-base';
import { useDispatch, useSelector } from 'react-redux'

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const HomeScreen = ({ navigation, route }) => {


    return (
        <View >
            <TouchableOpacity  >
                <Text className="text-red-500">Start PayooPaymentSDK</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    cardcontainer: {
        flex: 1
    }
})


export default HomeScreen;
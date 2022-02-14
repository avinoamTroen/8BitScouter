
import React from 'react';
import { StyleSheet, View, Text, Button, } from 'react-native';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
        // navigation.push('ReviewDetails');
    }
    const pressHandler2 = () => {
        navigation.navigate('TeleOp');
        // navigation.push('ReviewDetails');
    }
    const pressHandler3 = () => {
        navigation.navigate('Auto');
    }

    return (
        <View >
            <Text >Home Screen - hi</Text>
            <Button title='to review details screen' onPress={pressHandler} />
            <Button title='to go to teleop' onPress={pressHandler2} />
            <Button title='to go to Auto' onPress={pressHandler3} />

        </View>
    );
}
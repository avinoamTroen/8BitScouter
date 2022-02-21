import React from 'react';
import { useState } from 'react';
import { View, Text, Button, } from 'react-native';

export default function Home({ navigation }) {
    const goToGetSingleScout = () => {
        navigation.navigate('GetSingleScout');
    }



    // const runTestConnection1 = () => {
    //     res = send_things(thing);
    //     setTitle(res);
    // }



    return (
        <View >
            <Text>texttttttttt!</Text>
            <Button title='single scout' onPress={goToGetSingleScout} />
        </View>
    );
}
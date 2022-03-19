import React from 'react';
import { useState } from 'react';
import { View, Text, Button, } from 'react-native';

export default function Home({ navigation }) {
    const goToGetSingleScout = () => {
        navigation.navigate('GetSingleScout');
    }
    const goToGetTeamInfo = () => {
        navigation.navigate('GetTeamInfo');
    }


    return (
        <View >
            <Button title='single scout' onPress={goToGetSingleScout} />
            <Button title='team info' onPress={goToGetTeamInfo} />
        </View>
    );
}
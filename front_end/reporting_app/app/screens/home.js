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

    // can add again later
    //             <Button title='single scout' onPress={goToGetSingleScout} />
    return (
        <View >
            <Button title='team info' onPress={goToGetTeamInfo} />
        </View>
    );
}
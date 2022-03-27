import React from 'react';
import { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Typography, Formats } from '../styles';

export default function Home({ navigation }) {
    const goToGetSingleScout = () => {
        navigation.navigate('GetSingleScout');
    }
    const goToGetTeamInfo = () => {
        navigation.navigate('GetTeamInfo');
    }
    const goToGetTeamsList = () => {
        navigation.navigate('GetTeamsList');
    }
    const goToGetRound = () => {
        navigation.navigate('GetRound');
    }

    // can add again later
    //             <Button title='single scout' onPress={goToGetSingleScout} />
    return (
        <SafeAreaView style={{ ...Formats.NavigationButton, alignItems: 'center' }} >
            <Text style={Typography.BigText}>8Bit Reporting App</Text>
            <Text style={Typography.BigText}>7845</Text>
            <Text style={Typography.BigText}>Version: <Text style={{ color: 'red' }}>2.0.0</Text></Text>
            <TouchableOpacity onPress={goToGetTeamInfo} style={[Formats.NavigationButton, { backgroundColor: 'brown' }]}><View style={Formats.NavigationButton}><Text style={Typography.BigText}>Team Info</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToGetRound} style={[Formats.NavigationButton, { backgroundColor: 'brown' }]}><View style={Formats.NavigationButton}><Text style={Typography.BigText}>Scout Round</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToGetTeamsList} style={[Formats.NavigationButton, { backgroundColor: 'brown' }]}><View style={Formats.NavigationButton}><Text style={Typography.BigText}>Team List</Text></View></TouchableOpacity>
        </SafeAreaView>
    );
}
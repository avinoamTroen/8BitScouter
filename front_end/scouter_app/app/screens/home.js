import sendOneScout from '../networking/send_things';
import React from 'react';
import { SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native';
import store from '../my_redux/store';
import { Typography, Formats } from '../styles';
import { clearedCurrentScout } from '../my_redux/currentScouterActions';

export default function Home({ navigation }) {
    const newScout = () => {
        // clear current scout and init new clear one
        store.dispatch(clearedCurrentScout())

        // go to beginning of new scout
        navigation.navigate('PreGame');
    }
    const goToNavigator = () => {
        navigation.navigate('Navigator');
    }
    const goToDefaults = () => {
        // fill in later
    }




    const runTestConnection2 = async () => {
        res = await sendOneScout(store.getState());
    }



    return (
        <SafeAreaView style={{ ...Formats.NavigationButton, alignItems: 'center' }} >
            <Text style={Typography.BigText}>8Bit Scouting App</Text>
            <Text style={Typography.BigText}>7845</Text>
            <Text style={Typography.BigText}>Version: <Text style={{ color: 'red' }}>0.0.0</Text></Text>
            <TouchableOpacity onPress={newScout} style={[Formats.NavigationButton, { backgroundColor: 'brown' }]}><View style={Formats.NavigationButton}><Text style={Typography.BigText}>New Scout</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToNavigator} style={Formats.NavigationButton}><View style={Formats.NavigationButton}><Text style={Typography.BigText}>Navigation</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToDefaults} style={Formats.NavigationButton}><View style={Formats.NavigationButton}><Text style={Typography.BigText}>Set Up Defaults</Text></View></TouchableOpacity>


        </SafeAreaView >
    );
}

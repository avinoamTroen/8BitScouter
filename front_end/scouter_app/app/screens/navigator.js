import sendOneScout from '../networking/send_things';
import React from 'react';
import { SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native';
import store from '../my_redux/store';
import { Typography, Formats } from '../styles';

export default function Navigator({ navigation }) {
    const goToHome = () => {
        navigation.navigate('Home');
    }
    const goToPreGame = () => {
        navigation.navigate('PreGame');
    }
    const goToAuto = () => {
        navigation.navigate('Auto');
    }
    const goToAfterAuto = () => {
        navigation.navigate('AfterAuto');
    }
    const goToTele = () => {
        navigation.navigate('TeleOp');
    }
    const goToEndGame = () => {
        navigation.navigate('EndGame');
    }
    const goToPostGame = () => {
        navigation.navigate('PostGame');
    }



    const runTestConnection2 = async () => {
        res = await sendOneScout(store.getState());
    }



    return (
        <SafeAreaView style={{ flex: 1 }} >
            <TouchableOpacity onPress={goToHome} style={[Formats.NavigationButton, { backgroundColor: 'silver' }]}><View style={{ flex: 1 }}><Text style={Typography.BigText}>Home</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToPreGame} style={Formats.NavigationButton}><View style={{ flex: 1 }}><Text style={Typography.BigText}>Pre Game</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToAuto} style={Formats.NavigationButton}><View style={{ flex: 1 }}><Text style={Typography.BigText}>Auto</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToAfterAuto} style={Formats.NavigationButton}><View style={{ flex: 1 }}><Text style={Typography.BigText}>AfterAuto</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToTele} style={Formats.NavigationButton}><View style={{ flex: 1 }}><Text style={Typography.BigText}>Tele</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToEndGame} style={Formats.NavigationButton}><View style={{ flex: 1 }}><Text style={Typography.BigText}>End Game</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToPostGame} style={Formats.NavigationButton}><View style={{ flex: 1 }}><Text style={Typography.BigText}>Post Game</Text></View></TouchableOpacity>



            <TouchableOpacity onPress={() => console.log(store.getState())} style={[Formats.NavigationButton, { backgroundColor: 'magenta' }]}><View style={{ flex: 1 }}><Text style={Typography.BigText}>press to print state</Text></View></TouchableOpacity>


        </SafeAreaView >
    );
}

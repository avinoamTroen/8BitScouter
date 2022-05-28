import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import store from '../my_redux/store';
import { Typography, Formats } from '../styles';
import resetScout from '../utils/partiallyResetScout';

export default function Home({ navigation }) {
    const newScout = () => {
        // reset current scout
        resetScout()

        // go to beginning of new scout
        navigation.navigate('PreGame');
    }
    const goToNavigator = () => {
        navigation.navigate('Navigator');
    }


    const [numOfUnsent, setNumOfUnsent] = useState('?')



    return (
        <SafeAreaView style={{ ...Formats.NavigationButton, alignItems: 'center' }} >
            <Text style={Typography.BigText}>8Bit Scouting App</Text>
            <Text style={Typography.BigText}>7845</Text>
            <Text style={Typography.BigText}>Version: <Text style={{ color: 'red' }}>2.0.0</Text></Text>
            <TouchableOpacity onPress={() => setNumOfUnsent(store.getState().scoutSendingQueue.length)} style={[Formats.NavigationButton, { backgroundColor: 'brown' }]}>
                <View style={Formats.NavigationButton}>
                    <Text style={Typography.BigText}>Number of unsent scouts is <Text style={{ color: 'red' }}>{numOfUnsent}</Text>{'\n'} (press to update)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={newScout} style={[Formats.NavigationButton, { backgroundColor: 'brown' }]}><View style={Formats.NavigationButton}><Text style={Typography.BigText}>New Scout</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={goToNavigator} style={Formats.NavigationButton}><View style={Formats.NavigationButton}><Text style={Typography.BigText}>Navigation</Text></View></TouchableOpacity>


        </SafeAreaView >
    );
}

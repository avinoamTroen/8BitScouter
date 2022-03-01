import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TopNav from '../myComponents/TopNav';
import { Formats } from '../styles';

export default function postGame({ navigation }) {
    const goToNext = () => {
        navigation.navigate('Home');
    }
    const goToHome = () => {
        navigation.navigate('Home');
    }
    const goBack = () => {
        navigation.navigate('EndGame');
    }
    return (
        <View >
            <TopNav
                goBack={goBack}
                goToHome={goToHome}
            />
            <Text style={{ flex: 1 }}>Game details will appear here</Text>
            <TouchableOpacity
                style={Formats.nextButton}
                onPress={goToNext}
            >
                <Text style={Formats.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
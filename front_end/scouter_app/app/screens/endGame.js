import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TopNav from '../myComponents/TopNav';
import { Formats } from '../styles';

export default function endGame({ navigation }) {
    const goToNext = () => {
        navigation.navigate('PostGame');
    }
    const goToHome = () => {
        navigation.navigate('Home');
    }
    const goBack = () => {
        navigation.navigate('TeleOp');
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
            ><Text style={Formats.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
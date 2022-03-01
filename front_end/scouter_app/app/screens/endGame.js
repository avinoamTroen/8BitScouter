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

        <View style={{ flex: 1 }}>
            <TopNav
                goBack={goBack}
                goToHome={goToHome}
            />
            <View style={Formats.EnglishLineContainer}>
                <Text style={{ flex: 1 }}>Game details will appear here</Text>
            </View>
            <TouchableOpacity
                style={Formats.nextButton}
                onPress={goToNext}
            ><Text style={Formats.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
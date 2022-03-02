import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import TopNav from '../myComponents/TopNav';
import { Formats } from '../styles';
import TitledScale from '../myComponents/TitledScale';
import store from '../my_redux/store';
import { setDefensiveDefenseLevel } from '../my_redux/currentScouterActions';

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
        <View style={{ flex: 1 }} >
            <TopNav
                goBack={goBack}
                goToHome={goToHome}
            />
            <View style={{ flex: 1, backgroundColor: 'grey' }}>
                <TitledScale
                    title={'Defensive Defense Level'}
                    max={7}
                    setCurrentChoice={(newChoice) => store.dispatch(setDefensiveDefenseLevel(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.defensiveDefenseLevel) }}
                />
            </View>

            <TouchableOpacity
                style={Formats.nextButton}
                onPress={goToNext}
            >
                <Text style={Formats.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
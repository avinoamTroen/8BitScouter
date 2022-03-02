import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import TopNav from '../myComponents/TopNav';
import { Formats } from '../styles';
import TitledScale from '../myComponents/TitledScale';
import store from '../my_redux/store';
import { setDefensiveDefenseLevel, setoffensiveDefenseLevel, setWasDefendedLevel, setGoodTeamMateLevel, setWasBroken, setGeneralImpression, setOffensiveDefenseLevel } from '../my_redux/currentScouterActions';

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
                <TitledScale
                    title={'Offensive Defense Level'}
                    max={7}
                    setCurrentChoice={(newChoice) => store.dispatch(setOffensiveDefenseLevel(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.offensiveDefenseLevel) }}
                />
                <TitledScale
                    title={'Was defended level'}
                    max={7}
                    setCurrentChoice={(newChoice) => store.dispatch(setWasDefendedLevel(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.wasDefendedLevel) }}
                />
                <TitledScale
                    title={'Team mate level'}
                    max={7}
                    setCurrentChoice={(newChoice) => store.dispatch(setGoodTeamMateLevel(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.goodTeamMateLevel) }}
                />
                <TitledScale
                    title={'Robot was Broken'}
                    max={3}
                    setCurrentChoice={(newChoice) => store.dispatch(setWasBroken(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.wasBroken) }}
                />
                <TitledScale
                    title={'General impression'}
                    max={7}
                    setCurrentChoice={(newChoice) => store.dispatch(setGeneralImpression(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.generalImpression) }}
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
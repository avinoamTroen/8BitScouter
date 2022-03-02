import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import TopNav from '../myComponents/TopNav';
import { Formats } from '../styles';
import TitledScale from '../myComponents/TitledScale';
import store from '../my_redux/store';
import { setDefensiveDefenseLevel, setOffensiveDefenseLevel, setWasDefendedLevel, setGoodTeamMateLevel, setWasBroken, setGeneralImpression } from '../my_redux/currentScouterActions';
import { setFreeText, setRobotNoFunction, setSystemNoFunction } from '../my_redux/currentScouterActions';
import TitledTextInput from '../myComponents/TitledTextInput';
import TitledSwitch from '../myComponents/TitledSwitch';

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
            <ScrollView style={{ flex: 1, backgroundColor: 'grey', height: 1000 }}>
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
                <View style={Formats.EnglishLineContainer}>
                    <TitledSwitch
                        title={'Robot Did Not Function'}
                        setTruth={(isTrue) => store.dispatch(setRobotNoFunction(isTrue))}
                        getTruth={() => store.getState().currentScout.robotNoFunction}
                    />
                    <TitledSwitch
                        title={'A System of the Robot Failed'}
                        setTruth={(isTrue) => store.dispatch(setSystemNoFunction(isTrue))}
                        getTruth={() => store.getState().currentScout.systemNoFunction}
                    />
                </View>
                <View style={{ minHeight: 300 }}>
                    <TitledTextInput
                        setText={(newText) => store.dispatch(setFreeText(newText))}
                        getText={() => store.getState().currentScout.freeText}
                        placeholder="write here..."
                        title="Free Text On This Scout"
                        maxLength={499}
                    />
                </View>
                <TouchableOpacity
                    style={Formats.nextButton}
                    onPress={goToNext}
                >
                    <Text style={Formats.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </ScrollView>


        </View>
    );
}
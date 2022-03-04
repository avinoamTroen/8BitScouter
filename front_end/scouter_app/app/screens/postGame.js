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
import { clearedCurrentScout, setWhenCaptured } from '../my_redux/currentScouterActions'
import { addQueue } from '../my_redux/sendQueueActions';
import getCurrentDateTime from '../utils/myDateTime';
import sendScouts from '../networking/sendScouts';

export default function postGame({ navigation }) {
    const finishOneScout = () => {
        // add time stamp!!
        store.dispatch(setWhenCaptured(getCurrentDateTime()))
        // save one scout to que and init send
        store.dispatch(addQueue(store.getState().currentScout))
        sendScouts()
        // clear current scout
        store.dispatch(clearedCurrentScout())
        // go to home screen
        navigation.navigate('Home');
    }
    const goToNavigator = () => {
        navigation.navigate('Navigator');
    }
    const goBack = () => {
        navigation.navigate('EndGame');
    }

    return (
        <View style={{ flex: 1 }} >
            <TopNav
                goBack={goBack}
                goToNavigator={goToNavigator}
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
                    onPress={finishOneScout}
                >
                    <Text style={Formats.nextButtonText}>Send</Text>
                </TouchableOpacity>
            </ScrollView>


        </View>
    );
}
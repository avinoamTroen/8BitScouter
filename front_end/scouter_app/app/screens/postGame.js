import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
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
import resetScout from '../utils/partiallyResetScout';

function validOneScout(scout) {
    return (scout.compName != '' && scout.matchType != '' && scout.matchNumber != 0 && scout.teamNumber != 0 && scout.scouterName != '' && scout.scouterTeamNumber != 0);
}

export default function postGame({ navigation }) {
    const finishOneScout = () => {
        // check validity
        if (validOneScout(store.getState().currentScout)) {
            console.log('starting finishOneScout - post ')
            // add time stamp!!
            store.dispatch(setWhenCaptured(getCurrentDateTime()))
            // save one scout to que and init send
            store.dispatch(addQueue(store.getState().currentScout))
            console.log('about to send scouts- post')
            sendScouts()
            console.log('done sending scouts -post')
            // reset current scout
            resetScout()
            // go to home screen
            navigation.navigate('Home');
        }
        else {
            // alert that there are missing stuff
            Alert.alert('fill out all pre-game fields then try sending again!')
        }
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
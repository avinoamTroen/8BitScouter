import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import store from '../my_redux/store';
import { Formats } from '../styles';
import TopNav from '../myComponents/TopNav';
import TitledSwitch from '../myComponents/TitledSwitch';
import TitledTextInput from '../myComponents/TitledTextInput';
import { setAutoMalfunction, setPassedLine, setBallsHumanShotAuto, setBallsHumanScoredAuto, setAutoFreeText } from '../my_redux/currentScouterActions'

export default function AfterAuto({ navigation }) {
    // navigation 
    const goToNext = () => {
        navigation.navigate('TeleOp');
    }
    const goToNavigator = () => {
        navigation.navigate('Navigator');
    }
    const goBack = () => {
        navigation.navigate('Auto');
    }





    return (
        <View style={{ flex: 1 }}>
            <TopNav
                goBack={goBack}
                goToNavigator={goToNavigator}
            />

            <View style={styles.EnglishLineContainer}>
                <TitledSwitch
                    title={'Robot Passed Line'}
                    setTruth={(isTrue) => store.dispatch(setPassedLine(isTrue))}
                    getTruth={() => store.getState().currentScout.passedLine}
                />
                <TitledSwitch
                    title={'Robot Went Crazy'}
                    setTruth={(isTrue) => store.dispatch(setAutoMalfunction(isTrue))}
                    getTruth={() => store.getState().currentScout.autoMalfunction}
                />
            </View>


            <View style={styles.EnglishLineContainer}>
                <TitledSwitch
                    title={'Human Tried To Shoot'}
                    setTruth={(isTrue) => store.dispatch(setBallsHumanShotAuto(isTrue))}
                    getTruth={() => store.getState().currentScout.ballsHumanShotAuto}
                />
                <TitledSwitch
                    title={'Human Scored'}
                    setTruth={(isTrue) => store.dispatch(setBallsHumanScoredAuto(isTrue))}
                    getTruth={() => store.getState().currentScout.ballsHumanScoredAuto}
                />
            </View>

            <View style={{ minHeight: 300 }}>
                <TitledTextInput
                    setText={(newText) => store.dispatch(setAutoFreeText(newText))}
                    getText={() => store.getState().currentScout.autoFreeText}
                    placeholder="write here..."
                    title="Free Text On Auto"
                    maxLength={499}
                />
            </View>


            <TouchableOpacity
                style={Formats.nextButton}
                onPress={goToNext}
            ><Text style={Formats.nextButtonText}>Next</Text></TouchableOpacity>


        </View>
    );
}
const styles = StyleSheet.create({
    EnglishLineContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    regularText: {
        flexWrap: 'wrap',
        flex: 1,
    }

})
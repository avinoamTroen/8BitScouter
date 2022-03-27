import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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

            <View style={[styles.EnglishLineContainer, { flex: 1, minHeight: 80 }]}>
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




            <View style={{ minHeight: 300, flex: 5 }}>
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
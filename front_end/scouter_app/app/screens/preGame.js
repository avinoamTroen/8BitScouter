import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import SwipableContainer from '../myComponents/SwipableContainer';
import store from '../my_redux/store';
import { setScouterTeamNumber, setScouterName, setCompName, setMatchType, setMatchNumber, setTeamNumber } from '../my_redux/currentScouterActions'
import TitledChoiceList from '../myComponents/ChoiceList';
import { Formats } from '../styles';

export default function preGame({ navigation }) {
    // navigation 
    const goToNext = () => {
        navigation.navigate('Auto');
    }



    // ***Top Row***

    // Set up data - 'arrays'
    const getScouterTeams = () => {
        return [
            0,
            7845,
            7067,
            3083,
            6230
        ]
    }
    const getScouterNames = () => {
        return [
            '',
            'avinoam',
            'yair',
            'sela'
        ]
    }
    const scouterTeams = getScouterTeams()
    const scouterNames = getScouterNames()
    // set up local state stuff
    const [scouterTeamNumberL, setScouterTeamNumberL] = useState(store.getState().currentScout.scouterTeamNumber)
    const [scouterNameL, setScouterNameL] = useState(store.getState().currentScout.scouterName)


    // ***Middle Row***

    // Set up data - 'arrays'
    const getCompNames = () => {
        return [
            '',
            'PREGIONAL',
            'ISR DISTRICT #1',
            'ISR DISTRICT #2',
            'ISR DISTRICT #3',
            'ISR DISTRICT #4',
        ]
    }
    const getMatchTypes = () => {
        return [
            '',
            'Test/Practice',
            'Qualifications',
            'Quarters',
            'Semis',
            'Finals'
        ]
    }
    const getMatchNumbers = () => {
        return [...Array(100).keys()]
    }
    const compNames = getCompNames()
    const matchTypes = getMatchTypes()
    const matchNumbers = getMatchNumbers()
    // set up local state stuff
    const [compNameL, setCompNameL] = useState(store.getState().currentScout.compName)
    const [matchTypeL, setMatchTypeL] = useState(store.getState().currentScout.matchType)
    const [matchNumberL, setMatchNumberL] = useState(store.getState().currentScout.matchNumber)


    // ***Bottom row***

    // Set up data - 'arrays'
    const getTeamNumbers = () => {
        return [
            0,
            7845,
            7067,
            3083,
            6230
        ]
    }
    const teamNumbers = getTeamNumbers()
    // set up local state stuff
    const [teamNumberL, setTeamNumberL] = useState(store.getState().currentScout.teamNumber)


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.EnglishLineContainer}>
                <TitledChoiceList
                    title={'My Team Number'}
                    selectedValue={scouterTeamNumberL}
                    array={scouterTeams}
                    onValueChange={(itemValue, itemIndex) => {
                        store.dispatch(setScouterTeamNumber(itemValue));
                        setScouterTeamNumberL(itemValue)
                    }}

                />

                <TitledChoiceList
                    title={'My Name'}
                    selectedValue={scouterNameL}
                    array={scouterNames}
                    onValueChange={(itemValue, itemIndex) => {
                        store.dispatch(setScouterName(itemValue));
                        setScouterNameL(itemValue)
                    }}

                />
            </View>


            <View style={styles.EnglishLineContainer}>
                <TitledChoiceList
                    title={'Competition Name'}
                    selectedValue={compNameL}
                    array={compNames}
                    onValueChange={(itemValue, itemIndex) => {
                        store.dispatch(setCompName(itemValue));
                        setCompNameL(itemValue)
                    }}

                />

                <TitledChoiceList
                    title={'Match Type'}
                    selectedValue={matchTypeL}
                    array={matchTypes}
                    onValueChange={(itemValue, itemIndex) => {
                        store.dispatch(setMatchType(itemValue));
                        setMatchTypeL(itemValue)
                    }}

                />

                <TitledChoiceList
                    title={'Match Number'}
                    selectedValue={matchNumberL}
                    array={matchNumbers}
                    onValueChange={(itemValue, itemIndex) => {
                        store.dispatch(setMatchNumber(itemValue));
                        setMatchNumberL(itemValue)
                    }}

                />
            </View>

            <View style={styles.EnglishLineContainer}>
                <TitledChoiceList
                    title={'I am scouting Team Number'}
                    selectedValue={teamNumberL}
                    array={teamNumbers}
                    onValueChange={(itemValue, itemIndex) => {
                        store.dispatch(setTeamNumber(itemValue));
                        setTeamNumberL(itemValue)
                    }}

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
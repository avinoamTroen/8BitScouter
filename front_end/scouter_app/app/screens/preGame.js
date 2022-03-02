import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import store from '../my_redux/store';
import { setScouterTeamNumber, setScouterName, setCompName, setMatchType, setMatchNumber, setTeamNumber } from '../my_redux/currentScouterActions'
import TitledChoiceList from '../myComponents/ChoiceList';
import { Formats } from '../styles';
import TopNav from '../myComponents/TopNav';
import TitledTextInput from '../myComponents/TitledTextInput';

export default function preGame({ navigation }) {
    // navigation 
    const goToNext = () => {
        navigation.navigate('Auto');
    }
    const goToHome = () => {
        navigation.navigate('Home');
    }
    const goBack = () => {
        navigation.navigate('Home');
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

    return (
        <View style={{ flex: 1 }}>
            <TopNav
                goBack={goBack}
                goToHome={goToHome}
            />
            <View style={styles.EnglishLineContainer}>
                <TitledChoiceList
                    title={'My Team Number'}
                    array={scouterTeams}
                    setCurrentChoice={(newChoice) => store.dispatch(setScouterTeamNumber(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.scouterTeamNumber) }}
                />
            </View>
            <View style={{ minHeight: 80 }}>
                <TitledTextInput
                    setText={(newText) => store.dispatch(setScouterName(newText))}
                    getText={() => store.getState().currentScout.scouterName}
                    placeholder="write here..."
                    title="My Name"
                    maxLength={30}
                    multiline={false}
                    flipped={true}

                /></View>

            <View style={styles.EnglishLineContainer}>
                <TitledChoiceList
                    title={'Competition name'}
                    array={compNames}
                    setCurrentChoice={(newChoice) => store.dispatch(setCompName(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.compName) }}
                />
            </View>

            <View style={styles.EnglishLineContainer}>

                <TitledChoiceList
                    title={'Match Type'}
                    array={matchTypes}
                    setCurrentChoice={(newChoice) => store.dispatch(setMatchType(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.matchType) }}
                />
                <TitledChoiceList
                    title={'Match Number'}
                    array={matchNumbers}
                    setCurrentChoice={(newChoice) => store.dispatch(setMatchNumber(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.matchNumber) }}
                />


            </View>

            <View style={styles.EnglishLineContainer}>
                <TitledChoiceList
                    title={'I am scouting Team Number'}
                    array={teamNumbers}
                    setCurrentChoice={(newChoice) => store.dispatch(setTeamNumber(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.teamNumber) }}
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
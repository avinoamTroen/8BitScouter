import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import CoumterTracker from '../myComponents/CounterTracker';
import SwipableContainer from '../myComponents/SwipableContainer';
import { setBallsInUpperTele, setBallsInLowerTele, setBallsMissedTele } from '../my_redux/currentScouterActions';
import store from '../my_redux/store';
import { Formats } from '../styles'
import TopNav from '../myComponents/TopNav';

export default function Tele({ navigation }) {

    goToNext = () => {
        navigation.navigate('EndGame');
    };
    const goToNavigator = () => {
        navigation.navigate('Navigator');
    }
    const goBack = () => {
        navigation.navigate('AfterAuto');
    }



    return (
        <SafeAreaView style={styles.container}>
            <TopNav
                goBack={goBack}
                goToNavigator={goToNavigator}
            />
            <CoumterTracker
                getCurrentCount={() => { return (store.getState().currentScout.ballsInUpperTele) }}
                setCurrentCount={(res) => store.dispatch(setBallsInUpperTele(res))}
                title={'Balls in Upper Hub - Tele'}
            />
            <CoumterTracker
                getCurrentCount={() => { return (store.getState().currentScout.ballsInLowerTele) }}
                setCurrentCount={(res) => store.dispatch(setBallsInLowerTele(res))}
                title={'Balls in Lower Hub - Tele'}
            />
            <CoumterTracker
                getCurrentCount={() => { return (store.getState().currentScout.ballsMissedTele) }}
                setCurrentCount={(res) => store.dispatch(setBallsMissedTele(res))}
                title={'Balls Missed - Tele'}
            />

            <TouchableOpacity
                style={Formats.nextButton}
                onPress={goToNext}
            ><Text style={Formats.nextButtonText}>Next</Text></TouchableOpacity>
        </SafeAreaView >
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        flex: 0.2,
        width: '100%',
        backgroundColor: '#0a0',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        textAlign: 'center',
        textAlignVertical: "center",
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 0,
    },
    topMenu: {
        flex: 1,
        width: '100%',
        backgroundColor: '#aaa',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        textAlign: 'center',
        textAlignVertical: "center",
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 0,
    },
    bottomMenu: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    bigText: {
        textAlign: 'center',
        textAlignVertical: "center",
        fontWeight: 'bold',
        fontSize: 100,
    },
    midText: {
        fontSize: 20,
    },
    button: {
        flex: 0.4,
        backgroundColor: 'indigo',
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        flex: 0.025,
        backgroundColor: '#000',
    },
    top: {
        flex: 5,
        width: '100%',
        backgroundColor: 'ivory',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    bottom: {
        flex: 5,
        width: '100%',
        backgroundColor: 'khaki',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
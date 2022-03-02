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
import { setBallsInUpperAuto, setBallsInLowerAuto, setBallsMissedAuto } from '../my_redux/currentScouterActions';
import store from '../my_redux/store';
import { Formats } from '../styles'
import TopNav from '../myComponents/TopNav';

export default function Auto({ navigation }) {

    goToNext = () => {
        navigation.navigate('AfterAuto');
    };
    goBack = () => {
        navigation.navigate('PreGame');
    };
    goToNavigator = () => {
        navigation.navigate('Navigator');
    };



    return (
        <SafeAreaView style={styles.container}>
            <TopNav
                goBack={goBack}
                goToNavigator={goToNavigator}
            />
            <CoumterTracker
                getCurrentCount={() => { return (store.getState().currentScout.ballsInUpperAuto) }}
                setCurrentCount={(res) => store.dispatch(setBallsInUpperAuto(res))}
                title={'Balls in Upper Hub - Auto'}
            />
            <CoumterTracker
                getCurrentCount={() => { return (store.getState().currentScout.ballsInLowerAuto) }}
                setCurrentCount={(res) => store.dispatch(setBallsInLowerAuto(res))}
                title={'Balls in Lower Hub - Auto'}
            />
            <CoumterTracker
                getCurrentCount={() => { return (store.getState().currentScout.ballsMissedAuto) }}
                setCurrentCount={(res) => store.dispatch(setBallsMissedAuto(res))}
                title={'Balls Missed - Auto'}
            />

            <TouchableOpacity
                style={Formats.nextButton}
                onPress={goToNext}
            ><Text style={Formats.nextButtonText}>Next</Text>
            </TouchableOpacity>
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


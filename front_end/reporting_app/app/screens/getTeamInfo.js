import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import TitledNumInput from '../myComponents/TitledNumInput'
import store from '../redux/store';
import { setTeamNumber } from '../redux/actions';
import get_single_scout from '../networking/get_one_scout'

export default function goHome({ navigation }) {
    const goHome = () => {
        navigation.navigate('Home');
    }
    console.log('printing stuff before return (Team info)')
    console.log(store.getState())


    return (
        <View >
            <Button title='Home' onPress={goHome} />
            <SafeAreaView>


                <View style={{ height: 150, width: '100%' }}>
                    <TitledNumInput
                        setNum={(newNum) => store.dispatch(setTeamNumber(newNum))}
                        getNum={() => store.getState().teamNumber}
                        placeholder="Enter team number here"
                        title="I want data on team (number):"
                    />
                </View>

            </SafeAreaView>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

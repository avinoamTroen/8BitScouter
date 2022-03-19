import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import TitledNumInput from '../myComponents/TitledNumInput'
import store from '../redux/store';
import { setTeamNumber } from '../redux/actions';
import get_single_scout from '../networking/get_one_scout'

export default function goHome({ navigation }) {
    const goHome = () => {
        navigation.navigate('Home');
    }

    const updateData = () => {
        console.log('pretend update data');
    }

    // data!!!
    const [data, setData] = useState({})


    return (
        <View style={{ flex: 1 }}>
            <Button title='Home' onPress={goHome} />
            <View style={{ flex: 1 }}>


                <View style={{ height: 100, width: '100%' }}>
                    <TitledNumInput
                        setNum={(newNum) => store.dispatch(setTeamNumber(newNum))}
                        getNum={() => store.getState().teamNumber}
                        placeholder="Enter team number here"
                        title="I want data on team (number)"
                    />
                </View>

                <View style={{ height: 100, width: '100%' }}>
                    <TitledNumInput
                        setNum={(newNum) => store.dispatch(setGoBack(newNum))}
                        getNum={() => store.getState().goBack}
                        placeholder="Enter number"
                        title="Enter number of matches to go back"
                    />
                </View>

                <TouchableOpacity onPress={updateData} style={{ height: 50, width: '100%', backgroundColor: 'gold' }}>
                    <Text>RUN</Text>
                </TouchableOpacity>



                <ScrollView style={{ flex: 1, backgroundColor: 'grey', height: 1000 }}>
                    <Text>
                        <Text style={{ color: 'red' }}>short summary</Text>{'\n'}
                        easy round
                    </Text>
                </ScrollView>


            </View>

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

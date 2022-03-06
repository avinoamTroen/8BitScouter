import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import get_single_scout from '../networking/get_one_scout'

export default function goHome({ navigation }) {
    const goHome = () => {
        navigation.navigate('Home');
    }
    const print_get_single_scout = async () => {
        console.log('about to call function')
        res = await get_single_scout('ISR DISTRICT #2', 'Qualifications', 7, 1690)
        console.log('called function')
        console.log(res)
    }

    const [text, onChangeText] = React.useState("Useless - Text");
    const [number, onChangeNumber] = React.useState(null);


    const onChangeText2 = (txt) => {
        console.log(txt);
        onChangeText(txt);
    }

    // const runTestConnection1 = () => {
    //     res = send_things(thing);
    //     setTitle(res);
    // }



    return (
        <View >
            <Button title='Home' onPress={goHome} />
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder!!"
                    keyboardType="numeric"
                />
            </SafeAreaView>
            <Button title='testing get_one_scout' onPress={print_get_single_scout}></Button>

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

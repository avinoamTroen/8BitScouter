import sendOneScout from '../networking/send_things';
import React from 'react';
import { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import store from '../my_redux/store';
import getCurrentDateTime from '../utils/myDateTime';
import { Swipeable } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    const [title, setTitle] = useState();
    const goToPreGame = () => {
        navigation.navigate('PreGame');
    }
    const goToAuto = () => {
        navigation.navigate('Auto');
    }
    const goToAfterAuto = () => {
        navigation.navigate('AfterAuto');
    }
    const goToTele = () => {
        navigation.navigate('TeleOp');
    }
    const goToEndGame = () => {
        navigation.navigate('EndGame');
    }
    const goToPostGame = () => {
        navigation.navigate('PostGame');
    }


    const runTestConnection1 = async () => {
        const thing = { a: 'a', b: 'b', c: 78, d: 50.0, e: 'explanation' }
        res = await sendOneScout(thing)
        if (res.successful) { setTitle(res.msg); console.log('home: successful'); }
        else { setTitle("error: " + res.msg) }
    }
    const runTestConnection2 = async () => {
        res = await sendOneScout(store.getState());
    }
    const printDate = () => {
        console.log(getCurrentDateTime())
        console.log(typeof getCurrentDateTime())
    }

    return (
        <Swipeable
            renderLeftActions={() => <View><Text>left</Text></View>}
            renderRightActions={() => <View><Text>right</Text></View>}

            onSwipeableLeftOpen={() => console.log("Test swipe left")}
            onSwipeableRightOpen={() => console.log("Test swipe right")}>

            <View >
                <Button title='Pre Game' onPress={goToPreGame} />
                <Button title='Auto' onPress={goToAuto} />
                <Button title='AfterAuto' onPress={goToAfterAuto} />
                <Button title='Tele' onPress={goToTele} />
                <Button title='End Game' onPress={goToEndGame} />
                <Button title='Post Game' onPress={goToPostGame} />

                <Button title='1) send post message to server' onPress={runTestConnection1} />
                <Text>txt = {title}</Text>
                <Button title='2) send post currentScout to server' onPress={runTestConnection2} />
                <Button title='3) printDate' onPress={printDate} />
                <TouchableOpacity onPress={() => console.log(store.getState())}><Text>press to print state</Text></TouchableOpacity>


            </View>
        </Swipeable>
    );
}
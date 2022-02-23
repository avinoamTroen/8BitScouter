import send_things from '../send_things';
import React from 'react';
import { useState } from 'react';
import { View, Text, Button, } from 'react-native';
import store from '../redux_stuff/store';

export default function Home({ navigation }) {
    const [title, setTitle] = useState();
    const goToPreGame = () => {
        navigation.navigate('PreGame');
    }
    const goToAuto = () => {
        navigation.navigate('Auto');
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
        res = await send_things(thing)
        if (res.successful) { setTitle(res.msg); console.log('home: successful'); }
        else { setTitle("error: " + res.msg) }
    }
    const runTestConnection2 = async () => {
        res = await send_things(store.getState());
    }


    return (
        <View >
            <Button title='Pre Game' onPress={goToPreGame} />
            <Button title='Auto' onPress={goToAuto} />
            <Button title='Tele' onPress={goToTele} />
            <Button title='End Game' onPress={goToEndGame} />
            <Button title='Post Game' onPress={goToPostGame} />

            <Button title='1) send post message to server' onPress={runTestConnection1} />
            <Text>txt = {title}</Text>
            <Button title='2) send post currentScout to server' onPress={runTestConnection2} />

        </View>
    );
}
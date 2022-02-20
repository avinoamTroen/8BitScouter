import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import React from 'react';

export default function TeleOp({ navigation }) {
    const [ballsIn, setBallsIn] = useState(0);
    const [ballsMissed, setBallsMissed] = useState(0);

    goToAuto = () => {
        navigation.navigate('Auto');
    };

    goToHome = () => {
        navigation.navigate('Home');
    };

    buttonAdderBallsIn = () => {
        setBallsIn(ballsIn + 1);
    };

    buttonSubBallsIn = () => {
        let res = ballsIn - 1
        if (res < 0) {
            res = 0
        }
        setBallsIn(res);
    };

    buttonAdderBallsMissed = () => {
        setBallsMissed(ballsMissed + 1);
    };

    buttonSubBallsMissed = () => {
        let res = ballsMissed - 1
        if (res < 0) {
            res = 0
        }
        setBallsMissed(res);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topMenu}><Text style={styles.topMenu}>top menu</Text></View>

            <View style={styles.top}>
                <Text style={styles.header}>Balls In: {ballsIn}</Text>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={buttonAdderBallsIn}
                    >
                        <Text style={styles.bigText}>+</Text>
                    </TouchableOpacity>

                    <View style={styles.border}></View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={buttonSubBallsIn}
                    >
                        <Text style={styles.bigText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottom}>
                <Text style={styles.header}>Balls Missed: {ballsMissed}</Text>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={buttonAdderBallsMissed}
                    >
                        <Text style={styles.bigText}>+</Text>
                    </TouchableOpacity>

                    <View style={styles.border}></View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={buttonSubBallsMissed}
                    >
                        <Text style={styles.bigText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomMenu}>
                <View>
                    <TouchableOpacity
                        style={{ color: 'tomato' }}
                        onPress={goToAuto}
                    >
                        <Text style={{ fontSize: 50, }}> {"<"} </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={{ color: 'tomato' }}
                        onPress={goToHome}
                    >
                        <Text style={{ fontSize: 50, }}> {">"} </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView >
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#882',
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
        textAlign: 'center',
        textAlignVertical: "center",
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 0,
    },
    bigText: {
        textAlign: 'center',
        textAlignVertical: "center",
        fontWeight: 'bold',
        fontSize: 100,
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


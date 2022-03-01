import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import React from 'react';


export default function CoumterTracker(props) {
    const [count, setCount] = useState(props.getCurrentCount());

    countInc = () => {
        let res = count + 1;
        props.setCurrentCount(res)
        setCount(props.getCurrentCount());
    };

    countDec = () => {
        let res = count - 1
        if (res < 0) {
            res = 0
        }
        props.setCurrentCount(res)
        setCount(props.getCurrentCount());
    };

    return (

        <View style={styles.container}>
            <Text style={styles.header}>{props.title}</Text>
            <View style={{ flex: 3, flexDirection: 'row-reverse', }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={countInc}
                >
                    <Text style={styles.bigText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.midText}>{count}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={countDec}
                >
                    <Text style={styles.bigText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 5,
        width: '100%',
        backgroundColor: 'ivory',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        flex: 1,
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
    bigText: {
        flex: 2,
        textAlign: 'center',
        textAlignVertical: "center",
        fontWeight: 'bold',
        fontSize: 100,
    },
    midText: {
        flex: 2,
        textAlign: 'center',
        textAlignVertical: "center",
        fontWeight: 'bold',
        fontSize: 50,
    },
    button: {
        flex: 3,
        backgroundColor: 'indigo',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 3
    },

});


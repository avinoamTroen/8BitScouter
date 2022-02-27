import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function SwipableContainer(props) {
    return (
        <Swipeable
            containerStyle={styles.container}
            renderLeftActions={() => <View style={styles.left}></View>}
            renderRightActions={() => <View style={styles.right}></View>}

            onSwipeableLeftOpen={props.leftFunc}
            onSwipeableRightOpen={props.rightFunc}>
            {props.children}
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    left: {
        flex: 1,
        backgroundColor: 'blue'
    },
    right: {
        flex: 1,
        backgroundColor: 'red'
    }
})
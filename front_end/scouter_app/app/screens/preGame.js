import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import SwipableContainer from '../myComponents/SwipableContainer';
import store from '../my_redux/store';
import { stScoueterTeamNumber } from '../my_redux/currentScouterActions'

export default function preGame({ navigation }) {
    const goToAuto = () => {
        navigation.navigate('Auto');
    }
    const goToHome = () => {
        navigation.navigate('Home');
    }
    const data = [
        { key: 'Devin' },
        { key: 'Dan' },
        { key: 'Dominic' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' },
    ]
    const stam = [
        { key: 'Devin' },
        { key: 'Dan' },
        { key: 'Dominic' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' },
        { key: 'John2' },
        { key: 'Jillian2' },
        { key: 'Jimmy2' },
        { key: 'Julie2' },
    ]
    const f = (item) => <Text>{item.key}</Text>;
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.HebrewLineContainer}>
                <Text style={styles.regularText}>my team number</Text>
                <Text style={styles.regularText}>|input scouter team name|</Text>

                <FlatList
                    data={stam}
                    ListHeaderComponent={() => <View><Text>list header</Text></View>}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => store.dispatch(stScoueterTeamNumber(item.key))}><Text>{item.key}</Text></TouchableOpacity>}
                />

                <Text style={styles.regularText}>my name</Text>
                <Text style={styles.regularText}>|input scouter  name|</Text>
            </View>

            <TouchableOpacity onPress={() => console.log(store.getState())}><Text>press to print state</Text></TouchableOpacity>
            <View style={styles.HebrewLineContainer}>
                <Text style={styles.regularText}>comp name</Text>
                <Text style={styles.regularText}>|input comp name|</Text>

                <Text style={styles.regularText}>match type</Text>
                <Text style={styles.regularText}>|input match type|</Text>

                <Text style={styles.regularText}>match number</Text>
                <Text style={styles.regularText}>|input match number|</Text>
            </View>


            <View style={styles.HebrewLineContainer}>
                <Text style={styles.regularText}> filler </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    HebrewLineContainer: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        flex: 1
    },
    regularText: {
        flexWrap: 'wrap',
        flex: 1
    }
})
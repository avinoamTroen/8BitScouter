import getTeamsListFromServer from '../networking/getTeamsListFromServer'
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { round2 } from '../utils/utils'
import { setCompName, setGoBack } from '../redux/actions';
import TitledChoiceList from '../myComponents/ChoiceList';
import TitledNumInput
    from '../myComponents/TitledNumInput';
import store from '../redux/store';


export default function getTeamsList({ navigation }) {
    // add later
    const renderItem = ({ item }) => (
        <View style={{ borderBottomWidth: 2, backgroundColor: 'dodgerblue', alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>{item.teamNumber}</Text>
            <Text>defensiveScore <Text style={{ color: 'red', fontWeight: 'bold' }}>{round2(item.defensiveScore)}</Text> | offensiveScore <Text style={{ color: 'green', fontWeight: 'bold' }}>{round2(item.offensiveScore)}</Text></Text>
        </View>
    );
    const updateData = async () => {
        const res = await getTeamsListFromServer();
        if (res.canUse) {
            console.log(res)
            const newData = res.payload;
            setData(newData); // this updates the data in the local react hooks => in the render of the screen...
        }
    }

    // data!!!
    const [data, setData] = useState({})
    const teamsList = data['team_list']
    try {
        teamsList.sort((a, b) => (a.offensiveScore < b.offensiveScore) ? 1 : -1)
    }
    catch {
        console.log('cought')
    }
    const getCompNames = () => {
        return [
            '',
            'PREGIONAL',
            'ISR DISTRICT #1',
            'ISR DISTRICT #2',
            'ISR DISTRICT #3',
            'ISR DISTRICT #4',
            'ISR CHAMPIONSHIP'
        ]
    }
    const compNames = getCompNames()

    console.log('teamsList')
    console.log(teamsList)
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 80 }}>
                <TitledChoiceList
                    title={'Choose Competition'}
                    array={compNames}
                    setCurrentChoice={(newChoice) => store.dispatch(setCompName(newChoice))}
                    getCurrentChoice={() => { return (store.getState().compName) }}
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

            <TouchableOpacity onPress={updateData} style={{ height: 40, width: '100%', backgroundColor: 'gold', alignItems: 'center' }}>
                <Text style={{ fontSize: 35 }}>GO</Text>
            </TouchableOpacity>
            <FlatList
                data={teamsList}
                renderItem={renderItem}
                keyExtractor={(item) => item.teamNumber}
            />

        </SafeAreaView>
    )
}
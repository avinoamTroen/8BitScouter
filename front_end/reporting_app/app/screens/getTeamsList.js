import getTeamsListFromServer from '../networking/getTeamsListFromServer'
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { round2 } from '../utils/utils'


export default function getTeamsList({ navigation }) {
    // add later
    const renderItem = ({ item }) => (
        <View style={{ borderBottomWidth: 2, backgroundColor: 'dodgerblue', alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>{item.teamNumber}</Text>
            <Text>defensiveScore <Text style={{ color: 'red', fontWeight: 'bold' }}>{round2(item.defensiveScore)}</Text> | offensiveScore <Text style={{ color: 'red', fontWeight: 'bold' }}>{round2(item.offensiveScore)}</Text></Text>
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
        // teamsList.sort((a, b) => (a.offensiveScore < b.offensiveScore) ? 1 : -1)
        teamsList.sort((a, b) => (a.defensiveScore < b.defensiveScore) ? 1 : -1)
    }
    catch {
        console.log('cought')
    }

    console.log('teamsList')
    console.log(teamsList)
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={updateData} style={{ height: 50, width: '100%', backgroundColor: 'gold', alignItems: 'center' }}>
                <Text style={{ fontSize: 35 }}>GO</Text>
            </TouchableOpacity>
            <FlatList
                data={teamsList}
                renderItem={renderItem}
                keyExtractor={(item) => item.teamNumber}
            />

        </View>
    )
}
import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import TitledNumInput from '../myComponents/TitledNumInput'
import store from '../redux/store';
import { setTeamNumber, setGoBack } from '../redux/actions';
import get_team_avgs from '../networking/get_team_avgs';

export default function getTeaminfo({ navigation }) {
    const goHome = () => {
        navigation.navigate('Home');
    }

    const updateData = async () => {
        console.log('pretend update data');
        const res = await get_team_avgs();
        if (res.canUse) {
            console.log('getTeaminfo: success! here is res')
            console.log(res)
            const newData = res.payload;
            setData(newData); // this updates the data in the local react hooks => in the render of the screen...
        }
    }

    // data!!!
    const [data, setData] = useState({})
    const avgs = data
    let avgsTxt = ""
    for (const key in avgs) {
        avgsTxt += (`${key}: ${avgs[key]}`);
        avgsTxt += '\n';
    }
    // calculates the number of climbs = number of matches returned (which is differend then what was asked for if there are few records)

    const timesClimbed = avgs.levelClimbed ? avgs.levelClimbed.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    ) : 0; // if avgs.climblevel is undefined then will init to 0

    const totalPoints = (avgs && avgs.levelClimbed) ?
        avgs.ballsInLowerAuto * 2 + avgs.ballsInUpperAuto * 4 + avgs.ballsInLowerTele * 1 + avgs.ballsInUpperTele * 2
        + (avgs.levelClimbed[1] * 4 + avgs.levelClimbed[2] * 6 + avgs.levelClimbed[3] * 10 + avgs.levelClimbed[4] * 15) / timesClimbed
        : 0; // will init to 0 if avgs is undefined

    const totalBalls = avgs.ballsInLowerAuto + avgs.ballsInUpperAuto + avgs.ballsInLowerTele + avgs.ballsInUpperTele;


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

                <TouchableOpacity onPress={updateData} style={{ height: 50, width: '100%', backgroundColor: 'gold', alignItems: 'center' }}>
                    <Text style={{ fontSize: 35 }}>GO</Text>
                </TouchableOpacity>



                <ScrollView style={{ flex: 1, backgroundColor: 'grey', height: 1000 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, alignItems: 'center' }}>
                            <Text style={{ color: 'red', fontSize: 25 }}>Executive Summary: {avgs.teamNumber}</Text>{'\n'}
                            <Text style={{ fontWeight: 'bold' }}>Offense</Text>{'\n'}
                            <Text style={{ color: 'blue' }}>Avg points per game:  </Text><Text style={{ color: 'red', fontWeight: 'bold' }}>{totalPoints}</Text>{'\n'}
                            <Text style={{ fontWeight: 'bold' }}>RPs (and breakdown)</Text>{'\n'}
                            <Text style={{ color: 'blue' }}>Climb stats: out of *{timesClimbed}*:  </Text>| [bar 0]=<Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.levelClimbed ? avgs.levelClimbed[0] : 'NA'}</Text> | [bar 1]=<Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.levelClimbed ? avgs.levelClimbed[1] : 'NA'}</Text> |{'\n'}
                            | [bar 2]=<Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.levelClimbed ? avgs.levelClimbed[2] : 'NA'}</Text> | [bar 3]=<Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.levelClimbed ? avgs.levelClimbed[3] : 'NA'}</Text> | [bar 4]=<Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.levelClimbed ? avgs.levelClimbed[4] : 'NA'}</Text> |{'\n'}
                            <Text style={{ color: 'blue' }}>Total ball stats:   </Text><Text style={{ color: 'red', fontWeight: 'bold' }}>{totalBalls}</Text> balls per game{'\n'}
                            <Text style={{ color: 'blue' }}>Auto stats:</Text>avg auto points=<Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.ballsInLowerAuto * 2 + avgs.ballsInUpperAuto * 4}</Text> | avg auto balls=<Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.ballsInLowerAuto + avgs.ballsInUpperAuto}</Text>{'\n'}

                            <Text style={{ fontWeight: 'bold' }}>Defense</Text>{'\n'}
                            <Text style={{ color: 'blue' }}>Defense stats:   </Text> defensive: <Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.defensiveDefenseLevel}</Text> | offensive: <Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.offensiveDefenseLevel}</Text>{'\n'}

                            <Text style={{ fontWeight: 'bold' }}>Dependability</Text>{'\n'}
                            <Text style={{ color: 'blue' }}>goodTeamMateLevel:  </Text> <Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.goodTeamMateLevel}</Text>{'\n'}
                            <Text style={{ color: 'blue' }}>wasBroken:   </Text> <Text style={{ color: 'red', fontWeight: 'bold' }}>{avgs.wasBroken}</Text>{'\n'}
                            <Text style={{ color: 'blue' }}>climb failure percentage:   </Text> <Text style={{ color: 'red', fontWeight: 'bold' }}>{((timesClimbed - avgs.climbSuccessful) / timesClimbed) * 100}</Text>{'\n'}
                        </Text>
                        <Text>
                            {'\n\n\n\n'}
                            {avgsTxt}
                        </Text>
                    </View>
                </ScrollView>


            </View>

        </View >
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

import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import TitledNumInput from '../myComponents/TitledNumInput'
import store from '../redux/store';
import { setTeamNumber, setGoBack, setTeamNumberB1, setTeamNumberB2, setTeamNumberB3, setTeamNumberR1, setTeamNumberR2, setTeamNumberR3 } from '../redux/actions';
import get_team_avgs from '../networking/get_team_avgs';
import { round2 } from '../utils/utils';
import { getRoundFromServer } from '../networking/get_team_avgs';

export default function getRound({ navigation }) {
    const goHome = () => {
        navigation.navigate('Home');
    }

    const TitleAndData = (props) => {
        return (
            <View>
                <Text>
                    <Text style={styles.fieldName}>{props.title}: </Text>
                    <Text style={styles.redHighlight}>{props.data}</Text>
                </Text>
            </View>


        )
    }

    const updateData = async () => {
        console.log('pretend update data');
        const res = await getRoundFromServer();
        if (res.canUse) {
            console.log(res)
            const newData = res.data;
            setData(newData); // this updates the data in the local react hooks => in the render of the screen...
        }
    }

    // data!!!
    const [data, setData] = useState({})

    const R1Data = data['R1Data'] ? data['R1Data'] : {}
    const R2Data = data['R2Data'] ? data['R2Data'] : {}
    const R3Data = data['R3Data'] ? data['R3Data'] : {}

    const B1Data = data['B1Data'] ? data['B1Data'] : {}
    const B2Data = data['B2Data'] ? data['B2Data'] : {}
    const B3Data = data['B3Data'] ? data['B3Data'] : {}

    const avgsR1 = R1Data['avg_dict'] ? R1Data['avg_dict'] : {}; // will init to empty obj if undefined
    const scoresR1 = R1Data['scores'] ? R1Data['scores'] : {}; // will init to empty obj if undefined
    const avgsR2 = R2Data['avg_dict'] ? R2Data['avg_dict'] : {}; // will init to empty obj if undefined
    const scoresR2 = R2Data['scores'] ? R2Data['scores'] : {}; // will init to empty obj if undefined
    const avgsR3 = R3Data['avg_dict'] ? R3Data['avg_dict'] : {}; // will init to empty obj if undefined
    const scoresR3 = R3Data['scores'] ? R3Data['scores'] : {}; // will init to empty obj if undefined

    const avgsB1 = B1Data['avg_dict'] ? B1Data['avg_dict'] : {}; // will init to empty obj if undefined
    const scoresB1 = B1Data['scores'] ? B1Data['scores'] : {}; // will init to empty obj if undefined
    const avgsB2 = B2Data['avg_dict'] ? B2Data['avg_dict'] : {}; // will init to empty obj if undefined
    const scoresB2 = B2Data['scores'] ? B2Data['scores'] : {}; // will init to empty obj if undefined
    const avgsB3 = B3Data['avg_dict'] ? B3Data['avg_dict'] : {}; // will init to empty obj if undefined
    const scoresB3 = B3Data['scores'] ? B3Data['scores'] : {}; // will init to empty obj if undefined



    // calculates the number of climbs = number of matches returned (which is different then what was asked for if there are few records)
    const allAvgs = [avgsR1, avgsR2, avgsR3, avgsB1, avgsB2, avgsB3]
    let allTimesClimbed = [];
    for (let i = 0; i < 6; i++) {
        thisAvg = allAvgs[i]
        const timesClimbed = thisAvg.levelClimbed ? thisAvg.levelClimbed.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
        ) : 0; // if avgs.climblevel is undefined then will init to 0
        allTimesClimbed[i] = timesClimbed;
    }


    const totalBallsR = round2(
        avgsR1.ballsInLowerAuto + avgsR1.ballsInUpperAuto + avgsR1.ballsInLowerTele + avgsR1.ballsInUpperTele
        + avgsR2.ballsInLowerAuto + avgsR2.ballsInUpperAuto + avgsR2.ballsInLowerTele + avgsR2.ballsInUpperTele
        + avgsR3.ballsInLowerAuto + avgsR3.ballsInUpperAuto + avgsR3.ballsInLowerTele + avgsR3.ballsInUpperTele);

    const totalBallsB = round2(
        avgsB1.ballsInLowerAuto + avgsB1.ballsInUpperAuto + avgsB1.ballsInLowerTele + avgsB1.ballsInUpperTele
        + avgsB2.ballsInLowerAuto + avgsB2.ballsInUpperAuto + avgsB2.ballsInLowerTele + avgsB2.ballsInUpperTele
        + avgsB3.ballsInLowerAuto + avgsB3.ballsInUpperAuto + avgsB3.ballsInLowerTele + avgsB3.ballsInUpperTele);



    const climbToStr = (bar) => {
        // bar is an array of 0-4 for all the rungs
        console.log('bar')
        console.log(bar)
        if (!bar) {
            // if undefined
            return '';
        }
        let t = "| ";
        for (let i = 0; i < 5; i++) {
            t += '<' + i + '> - ' + bar[i] + ' | '
            console.log(t)
        }
        return t;

    }


    return (
        <View style={{ flex: 1 }}>
            <Button title='Home' onPress={goHome} />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: 500, width: '100%', flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', flexDirection: 'column', flex: 1, minHeight: 100, backgroundColor: 'red' }}>
                        <TitledNumInput
                            setNum={(newNum) => store.dispatch(setTeamNumberR1(newNum))}
                            getNum={() => store.getState().teamNumberR1}
                            placeholder="Enter team number here"
                            title="Red 1"
                        />
                        <TitledNumInput
                            setNum={(newNum) => store.dispatch(setTeamNumberR2(newNum))}
                            getNum={() => store.getState().teamNumberR2}
                            placeholder="Enter team number here"
                            title="Red 2"
                        />
                        <TitledNumInput
                            setNum={(newNum) => store.dispatch(setTeamNumberR3(newNum))}
                            getNum={() => store.getState().teamNumberR3}
                            placeholder="Enter team number here"
                            title="Red 3"
                        />
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'column', flex: 1, minHeight: 100, backgroundColor: 'blue' }}>
                        <TitledNumInput
                            setNum={(newNum) => store.dispatch(setTeamNumberB1(newNum))}
                            getNum={() => store.getState().teamNumberB1}
                            placeholder="Enter team number here"
                            title="Blue 1"
                        />
                        <TitledNumInput
                            setNum={(newNum) => store.dispatch(setTeamNumberB2(newNum))}
                            getNum={() => store.getState().teamNumberB2}
                            placeholder="Enter team number here"
                            title="Blue 2"
                        />
                        <TitledNumInput
                            setNum={(newNum) => store.dispatch(setTeamNumberB3(newNum))}
                            getNum={() => store.getState().teamNumberB3}
                            placeholder="Enter team number here"
                            title="Blue 3"
                        />
                    </View>
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



                <View style={{ backgroundColor: 'grey', flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>
                            <Text style={styles.mainTitle}>Teams{'\n'}</Text>
                            <Text style={styles.secondaryTitle}><Text style={{ color: 'red' }}>|{avgsR1.teamNumber}|{avgsR2.teamNumber}|{avgsR3.teamNumber}|{'\n'}</Text> <Text style={{ color: 'black' }}>VS{'\n'}</Text> <Text style={{ color: 'blue' }}>|{avgsB1.teamNumber}|{avgsB2.teamNumber}|{avgsB3.teamNumber}|{'\n'}</Text> </Text>

                            <Text style={styles.thirdTitle}>Offensive comparison{'\n'}</Text>
                            <Text style={{ color: 'red' }}>{round2(scoresR1['offensiveScore'])} | {round2(scoresR2['offensiveScore'])} | {round2(scoresR3['offensiveScore'])}</Text>
                            <Text>VS</Text>
                            <Text style={{ color: 'blue' }}>{round2(scoresB1['offensiveScore'])} | {round2(scoresB2['offensiveScore'])} | {round2(scoresB3['offensiveScore'])}{'\n'}</Text>

                            <Text style={{ color: 'red' }}>{round2(scoresR1['offensiveScore'] + scoresR2['offensiveScore'] + scoresR3['offensiveScore'])}</Text>
                            <Text>   VS   </Text>
                            <Text style={{ color: 'blue' }}>{round2(scoresB1['offensiveScore'] + scoresB2['offensiveScore'] + scoresB3['offensiveScore'])}{'\n'}</Text>


                            <Text style={styles.thirdTitle}>Ball comparison{'\n'}</Text>
                            <Text style={{ color: 'red' }}>{totalBallsR}</Text>
                            <Text>   VS   </Text>
                            <Text style={{ color: 'blue' }}>{totalBallsB}{'\n'}</Text>

                            <Text style={styles.thirdTitle}>Climb comparison{'\n'}</Text>
                            <Text style={{ color: 'red' }}>{climbToStr(avgsR1['levelClimbed'])}{'\n'}{climbToStr(avgsR2['levelClimbed'])}{'\n'}{climbToStr(avgsR3['levelClimbed'])}{'\n'}</Text>
                            <Text>   VS   {'\n'}</Text>
                            <Text style={{ color: 'blue' }}>{climbToStr(avgsB1['levelClimbed'])}{'\n'}{climbToStr(avgsB2['levelClimbed'])}{'\n'}{climbToStr(avgsB3['levelClimbed'])}{'\n'}</Text>
                        </Text>
                    </View>
                </View>


            </ScrollView >

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
    mainTitle: {
        color: 'red',
        fontSize: 30
    },
    mainSubTitle: {
        color: 'black',
        fontSize: 20
    },
    secondaryTitle: {
        color: 'blue',
        fontSize: 25
    },
    thirdTitle: {
        color: 'khaki',
        fontSize: 21
    },
    fourthTitle: {
        color: 'limegreen',
        fontSize: 19
    },
    fieldName: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    redHighlight: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textBoxEnglish: {
        alignItems: 'flex-start'
    }

});

import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import TitledNumInput from '../myComponents/TitledNumInput'
import store from '../redux/store';
import { setTeamNumber, setGoBack } from '../redux/actions';
import get_team_avgs from '../networking/get_team_avgs';
import { round2 } from '../utils/utils';

export default function getTeaminfo({ navigation }) {
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
    const avgs = data['avg_dict'] ? data['avg_dict'] : {}; // will init to empty obj if undefined
    const scores = data['scores'] ? data['scores'] : {}; // will init to empty obj if undefined
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
        round2(avgs.ballsInLowerAuto * 2 + avgs.ballsInUpperAuto * 4 + avgs.ballsInLowerTele * 1 + avgs.ballsInUpperTele * 2
            + (avgs.levelClimbed[1] * 4 + avgs.levelClimbed[2] * 6 + avgs.levelClimbed[3] * 10 + avgs.levelClimbed[4] * 15) / timesClimbed)
        : 0; // will init to 0 if avgs is undefined

    const totalBalls = round2(avgs.ballsInLowerAuto + avgs.ballsInUpperAuto + avgs.ballsInLowerTele + avgs.ballsInUpperTele);

    const bar0 = avgs['levelClimbed'] && avgs['levelClimbed'][0] ? avgs['levelClimbed'][0] : 0; // init to 0 if undefined
    const bar1 = avgs['levelClimbed'] && avgs['levelClimbed'][1] ? avgs['levelClimbed'][1] : 0; // init to 0 if undefined
    const bar2 = avgs['levelClimbed'] && avgs['levelClimbed'][2] ? avgs['levelClimbed'][2] : 0; // init to 0 if undefined
    const bar3 = avgs['levelClimbed'] && avgs['levelClimbed'][3] ? avgs['levelClimbed'][3] : 0; // init to 0 if undefined
    const bar4 = avgs['levelClimbed'] && avgs['levelClimbed'][4] ? avgs['levelClimbed'][4] : 0; // init to 0 if undefined


    return (
        <View style={{ flex: 1 }}>
            <Button title='Home' onPress={goHome} />
            <ScrollView style={{ flex: 1 }}>
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



                <View style={{ backgroundColor: 'grey', flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>

                            <Text style={styles.mainTitle}>Team - {avgs.teamNumber}</Text>{'\n\n'}
                            <Text style={styles.mainSubTitle}>Data on last {timesClimbed} rounds</Text>{'\n\n'}

                            <Text style={styles.secondaryTitle}>Executive Summary:</Text>{'\n'}
                            <View style={styles.textBoxEnglish}>
                                <TitleAndData
                                    title='General Score'
                                    data={round2(scores['generalScore'])}
                                />
                                <TitleAndData
                                    title='Offensive Score'
                                    data={round2(scores['offensiveScore'])}
                                />
                                <TitleAndData
                                    title='Defensive Score'
                                    data={round2(scores['defensiveScore'])}
                                />

                            </View><Text>{'\n\n'}</Text>


                            <Text style={styles.secondaryTitle}>Detailed Review:</Text>{'\n'}

                            <Text style={styles.thirdTitle}>RP potential</Text>{'\n'}
                            <View style={styles.textBoxEnglish}>
                                <Text style={styles.fourthTitle}>RP balls</Text>
                                <TitleAndData
                                    title='Balls in Auto'
                                    data={round2(avgs['ballsInUpperAuto'] + avgs['ballsInLowerAuto'])}
                                />
                                <TitleAndData
                                    title='Balls missed Auto'
                                    data={avgs['ballsMissedAuto']}
                                />
                                <TitleAndData
                                    title='Balls in Total'
                                    data={totalBalls}
                                />
                                <TitleAndData
                                    title='Balls missed Total'
                                    data={round2(avgs['ballsMissedAuto'] + avgs['ballsMissedTele'])}
                                />

                                <Text style={styles.fourthTitle}>RP Climb (out of {timesClimbed})</Text>
                                <TitleAndData
                                    title='Bar 0'
                                    data={bar0}
                                />
                                <TitleAndData
                                    title='Bar 1'
                                    data={bar1}
                                />
                                <TitleAndData
                                    title='Bar 2'
                                    data={bar2}
                                />
                                <TitleAndData
                                    title='Bar 3'
                                    data={bar3}
                                />
                                <TitleAndData
                                    title='Bar 4'
                                    data={bar4}
                                />
                            </View>{'\n'}

                            <Text style={styles.thirdTitle}>Offense</Text>{'\n'}
                            <View style={styles.textBoxEnglish}>
                                <Text style={styles.fourthTitle}>Autonomous</Text>
                                <TitleAndData
                                    title='Balls in Auto Top'
                                    data={round2(avgs['ballsInUpperAuto'])}
                                />
                                <TitleAndData
                                    title='Balls in Auto Bottom'
                                    data={round2(avgs['ballsInLowerAuto'])}
                                />
                                <TitleAndData
                                    title='Balls in Auto Missed'
                                    data={round2(avgs['ballsMissedAuto'])}
                                />
                                <Text style={styles.fourthTitle}>Teleop</Text>
                                <TitleAndData
                                    title='Balls in Tele Top'
                                    data={round2(avgs['ballsInUpperTele'])}
                                />
                                <TitleAndData
                                    title='Balls in Tele Bottom'
                                    data={round2(avgs['ballsInLowerTele'])}
                                />
                                <TitleAndData
                                    title='Balls in Tele Missed'
                                    data={round2(avgs['ballsMissedTele'])}
                                />
                                <TitleAndData
                                    title='Was defended (1-7)'
                                    data={avgs['wasDefendedLevel']}
                                />

                                <Text style={styles.fourthTitle}>Climb (out of {timesClimbed})</Text>
                                <TitleAndData
                                    title='Bar 0'
                                    data={bar0}
                                />
                                <TitleAndData
                                    title='Bar 1'
                                    data={bar1}
                                />
                                <TitleAndData
                                    title='Bar 2'
                                    data={bar2}
                                />
                                <TitleAndData
                                    title='Bar 3'
                                    data={bar3}
                                />
                                <TitleAndData
                                    title='Bar 4'
                                    data={bar4}
                                />
                            </View>{'\n'}

                            <Text style={styles.thirdTitle}>Defense</Text>{'\n'}
                            <View style={styles.textBoxEnglish}>
                                <TitleAndData
                                    title='Defense as defensive robot (1-7)'
                                    data={avgs['defensiveDefenseLevel']}
                                />
                                <TitleAndData
                                    title='Defense as offensive robot (1-7)'
                                    data={avgs['offensiveDefenseLevel']}
                                />
                            </View>{'\n'}

                            <Text style={styles.thirdTitle}>Dependability</Text>{'\n'}
                            <View style={styles.textBoxEnglish}>
                                <TitleAndData
                                    title={'Break average (out of ' + timesClimbed + ', scale 1-3)'}
                                    data={avgs['wasBroken']}
                                />
                                <TitleAndData
                                    title={'Climbs failed (out of' + timesClimbed + ')'}
                                    data={round2(timesClimbed - avgs['climbSuccessful'])}
                                />
                                <TitleAndData
                                    title={'Robot completely stopped (out of ' + timesClimbed + ')'}
                                    data={avgs['robotNoFunction']}
                                />
                                <TitleAndData
                                    title={'Robot system stopped (out of ' + timesClimbed + ')'}
                                    data={avgs['systemNoFunction']}
                                />
                                <TitleAndData
                                    title={'Good Team Mate (1-7)'}
                                    data={avgs['goodTeamMateLevel']}
                                />
                            </View>{'\n'}
                        </Text>

                        <Text style={styles.thirdTitle}>Extra Text{'\n'}</Text>
                        <Text style={styles.fourthTitle}>Auto Text{'\n'}</Text>
                        <Text style={{ flexWrap: 'wrap' }}>
                            {avgs['autoFreeText']}
                        </Text>
                        <Text style={styles.fourthTitle}>General Text{'\n'}</Text>
                        <Text style={{ flexWrap: 'wrap' }}>
                            {avgs['freeText']}
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

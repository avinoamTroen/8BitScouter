import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TopNav from '../myComponents/TopNav';
import store from '../my_redux/store';
import { setLevelClimbed, setClimbSuccessful, setClimbTime } from '../my_redux/currentScouterActions';
import { Formats } from '../styles';
import TitledChoiceList from '../myComponents/ChoiceList';
import TitledSwitch from '../myComponents/TitledSwitch';
import TitledNumInput from '../myComponents/TitledNumInput';

export default function endGame({ navigation }) {
    const goToNext = () => {
        navigation.navigate('PostGame');
    }
    const goToNavigator = () => {
        navigation.navigate('Navigator');
    }
    const goBack = () => {
        navigation.navigate('TeleOp');
    }

    const getClimbLevels = () => {
        return [...Array(5).keys()]
    }
    const climbLevels = getClimbLevels()
    return (

        <View style={{ flex: 1 }}>
            <TopNav
                goBack={goBack}
                goToNavigator={goToNavigator}
            />
            <View style={Formats.EnglishLineContainer}>
                <TitledChoiceList
                    title={'Climb Level'}
                    array={climbLevels}
                    setCurrentChoice={(newChoice) => store.dispatch(setLevelClimbed(newChoice))}
                    getCurrentChoice={() => { return (store.getState().currentScout.levelClimbed) }}
                />

            </View>
            <View style={Formats.EnglishLineContainer}>
                <TitledSwitch
                    title={'Climb Was Successful (false if the robot fell)'}
                    setTruth={(isTrue) => store.dispatch(setClimbSuccessful(isTrue))}
                    getTruth={() => store.getState().currentScout.climbSuccessful}
                />

            </View>
            <View style={Formats.EnglishLineContainer}>
                <TitledNumInput
                    setNum={(newNum) => store.dispatch(setClimbTime(newNum))}
                    getNum={() => store.getState().currentScout.climbTime}
                    placeholder="Enter seconds here"
                    title="Climb Time (seconds)"
                />

            </View>



            <TouchableOpacity
                style={Formats.nextButton}
                onPress={goToNext}
            ><Text style={Formats.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
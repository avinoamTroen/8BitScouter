import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import TopNav from '../myComponents/TopNav';
import { Formats } from '../styles';

export default function postGame({ navigation }) {
    const goToNext = () => {
        navigation.navigate('Home');
    }
    const goToHome = () => {
        navigation.navigate('Home');
    }
    const goBack = () => {
        navigation.navigate('EndGame');
    }

    const Item = ({ title }) => (
        <View>
            <Text >{title}</Text>
        </View>)

    return (
        <View style={{ flex: 1 }} >
            <TopNav
                goBack={goBack}
                goToHome={goToHome}
            />
            <View style={{ flex: 1, backgroundColor: 'grey' }}>
                <FlatList
                    data={[-1, 0, 1, 2, 3]}
                    renderItem={(item) => <Text>{item.toString()}</Text>}
                />
            </View>

            <TouchableOpacity
                style={Formats.nextButton}
                onPress={goToNext}
            >
                <Text style={Formats.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import { Formats } from '../styles'

export default function TopNav(props) {
    return (
        <View style={{ flexDirection: 'row', width: '100%', height: 51, borderWidth: 3, borderColor: 'black' }}>
            <TouchableOpacity
                style={Formats.backButton}
                onPress={props.goBack}
            ><Text style={Formats.nextButtonText}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Formats.NavigatorButton}
                onPress={props.goToNavigator}
            ><Text style={Formats.nextButtonText}>Navigator</Text>
            </TouchableOpacity>
        </View>
    )
}
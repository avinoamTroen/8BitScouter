import React, { useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

const TitledSwitch = (props) => {
    const [isTrue, setIsTrue] = useState(props.getTruth())
    const toggleSwitch = () => {
        props.setTruth(!isTrue)
        setIsTrue(props.getTruth())
    }
    return (
        <View
            style={styles.titledSwitchContainer}>
            <Text style={styles.choiceListTitle}>{props.title}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isTrue ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isTrue}


            />
        </View>
    )
}

export default TitledSwitch;
const styles = StyleSheet.create({
    choiceListTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
    },
    titledSwitchContainer: {
        flex: 1,
        backgroundColor: 'dodgerblue',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center'

    }
})
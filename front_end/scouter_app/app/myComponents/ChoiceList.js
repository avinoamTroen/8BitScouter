import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const ChoiceList = (props) => {
    pickerItemArray = props.array.map((item) => {
        return (
            <Picker.Item label={item.toString()} value={item} key={item} />
        )
    })
    return (
        <Picker
            selectedValue={props.selectedValue}
            style={{ height: 150, width: '100%' }}
            onValueChange={props.onValueChange}
        >
            {pickerItemArray}
        </Picker>
    )

}

const TitledChoiceList = (props) => {
    return (
        <View
            style={styles.choiceListContainer}>
            <Text style={styles.choiceListTitle}>{props.title}</Text>
            <ChoiceList
                selectedValue={props.selectedValue}
                array={props.array}
                onValueChange={props.onValueChange}
            />
        </View>
    )
}

export default TitledChoiceList;
const styles = StyleSheet.create({
    choiceListTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
    },
    choiceListContainer: {
        flex: 1,
        backgroundColor: 'dodgerblue',
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center'

    }
})
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const ChoiceList = (props) => {
    const [localCurrentChoice, setLocalCurrentChoice] = useState(props.getCurrentChoice())
    const onValueChange = (itemValue, itemIndex) => {
        props.setCurrentChoice(itemValue);
        setLocalCurrentChoice(props.getCurrentChoice())
    }
    pickerItemArray = props.array.map((item) => {
        return (
            <Picker.Item label={item.toString()} value={item} key={item} />
        )
    })

    return (
        <Picker
            selectedValue={localCurrentChoice}
            style={{ height: 150, width: '100%' }}
            onValueChange={onValueChange}
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
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 4 }}>
                    <ChoiceList
                        getCurrentChoice={props.getCurrentChoice}
                        setCurrentChoice={props.setCurrentChoice}
                        array={props.array}

                    />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
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
        borderWidth: 2,
        alignItems: 'center'

    }
})
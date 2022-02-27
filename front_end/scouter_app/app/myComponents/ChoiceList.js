import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default ChoiceList = (props) => {

    pickerItemArray = props.array.map((item) => {
        return (
            <Picker.Item label={toString(item)} value={item} />
        )
    })
    return (
        <Picker
            selectedValue={props.selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={props.onValueChange}
        >
            {pickerItemArray}
        </Picker>
    )

}
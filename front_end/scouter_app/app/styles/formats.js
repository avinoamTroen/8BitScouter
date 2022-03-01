import { StyleSheet } from "react-native"
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes"

export const styles = StyleSheet.create({
    nextButton: {
        backgroundColor: 'red',
        width: '100%',
        height: 50,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    backButton: {
        flex: 1,
        backgroundColor: 'yellow',
        height: 50,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    homeButton: {
        flex: 1,
        backgroundColor: 'gold',
        height: 50,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2
    },
    nextButtonText: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

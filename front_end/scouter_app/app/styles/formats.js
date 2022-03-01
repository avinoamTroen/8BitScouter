import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    nextButton: {
        backgroundColor: 'red',
        width: '100%',
        height: 51,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3
    },
    backButton: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        borderWidth: 1
    },
    homeButton: {
        flex: 1,
        backgroundColor: 'gold',
        alignItems: 'center',
        borderWidth: 1
    },
    nextButtonText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    EnglishLineContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    }

})

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';

function MyComp(props) {
	return <SafeAreaView><Text>{props.txt}</Text></SafeAreaView>
}

export default function App() {
	const [renderExample, setRenderExample] = useState(false)
	const [title, setTitle] = useState("I am a yelling title")

	const [ballsIn, setBallsIn] = useState(0);
	const [ballsMissed, setBallsMissed] = useState(0);
	buttonAdderBallsIn = () => {
		setBallsIn(ballsIn + 1);
	};

	buttonSubBallsIn = () => {
		setBallsIn(ballsIn - 1);
	};

	buttonAdderBallsMissed = () => {
		setBallsMissed(ballsMissed + 1);
	};

	buttonSubBallsMissed = () => {
		setBallsMissed(ballsMissed - 1);
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.header}>Balls In: {ballsIn}</Text>
				<View style={{ flex: 1, flexDirection: 'row', }}>
					<Button style={{ flex: 3, }}
						onPress={buttonAdderBallsIn}
						title='+'
					/>
					<Button style={{ flex: 1, }}
						onPress={buttonSubBallsIn}
						title='-'
					/>
				</View>
			</View>

			<View style={styles.bottom}>
				<Text style={styles.header}>Balls Missed: {ballsMissed}</Text>
				<View style={{ flex: 1, flexDirection: 'row', }}>
					<Button style={{ flex: 3, }}
						onPress={buttonAdderBallsMissed}
						title='+'
					/>
					<Button style={{ flex: 1, }}
						onPress={buttonSubBallsMissed}
						title='-'
					/>
				</View>
			</View>
		</SafeAreaView >
	);


}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#882',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	header: {
		flex: 0.2,
		width: '100%',
		backgroundColor: '#0a0',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		textAlign: 'center',
		textAlignVertical: "center",
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 0,
	},
	button: {
		flex: 1,
		backgroundColor: '#00f',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	top: {
		flex: 5,
		width: '100%',
		backgroundColor: 'dodgerblue',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	bottom: {
		flex: 5,
		width: '100%',
		backgroundColor: 'tomato',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});


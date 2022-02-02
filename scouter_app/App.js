import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';

function MyComp(props) {
	return <SafeAreaView><Text>{props.txt}</Text></SafeAreaView>
}

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.stam}></View>
			<Text style={styles.stam}>Hello world!</Text>
			<View style={styles.stam2}></View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#882',
		alignItems: 'center',
		justifyContent: 'center',
	},
	stam: {
		flex: 0.5,
		backgroundColor: '#9af',
		alignItems: 'center',
		justifyContent: 'center',
	},
	stam2: {
		flex: 0.5,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});


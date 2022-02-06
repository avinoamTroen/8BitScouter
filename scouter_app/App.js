import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';
import { one_scout } from 'app/my_proto_pb'

function MyComp(props) {
	return <SafeAreaView><Text>{props.txt}</Text></SafeAreaView>
}

export default function App() {
	const [renderExample, setRenderExample] = useState(false)
	const [title, setTitle] = useState("I am a yelling title")

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.stam}></View>
			<Text style={styles.stam}>|          Hello ??/?/?? world!       |</Text>
			<View style={styles.stam2}>
				<Button title='press me' onPress={
					() => {
						setRenderExample(!renderExample)
						setTitle(title + "!")
					}
				}></Button>
			</View>
			{renderExample && <Text>{title}</Text>}
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
		backgroundColor: '#00f',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	stam2: {
		flex: 0.5,
		backgroundColor: '#f00',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
});


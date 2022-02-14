// global styles Global.js
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

module.GlobalStyles = StyleSheet.create({
	// containers
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
		fontSize: 25,
		marginTop: 0,
	},
	topMenu: {
		flex: 1,
		width: '100%',
		backgroundColor: '#aaa',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		textAlign: 'center',
		textAlignVertical: "center",
		fontWeight: 'bold',
		fontSize: 25,
		marginTop: 0,
	},
	bottomMenu: {
		flex: 1,
		width: '100%',
		backgroundColor: '#aaa',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		textAlign: 'center',
		textAlignVertical: "center",
		fontWeight: 'bold',
		fontSize: 25,
		marginTop: 0,
	},
	top: {
		flex: 5,
		width: '100%',
		backgroundColor: 'ivory',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	bottom: {
		flex: 5,
		width: '100%',
		backgroundColor: 'khaki',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},

	// text
	bigText: {
		textAlign: 'center',
		textAlignVertical: "center",
		fontWeight: 'bold',
		fontSize: 100,
	},

	// button
	button: {
		flex: 0.4,
		backgroundColor: 'indigo',
		alignItems: 'center',
		justifyContent: 'center',
	},

	// miscalleneous
	border: {
		flex: 0.025,
		backgroundColor: '#000',
	},

});

if (global) {
	global.GlobalStyles = module.GlobalStyles;
}	

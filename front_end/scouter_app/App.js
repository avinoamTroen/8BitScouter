import Navigator from './app/routes/homeStack';
// to make this app always be left to right
import { I18nManager } from 'react-native';
I18nManager.allowRTL(false);

export default function App({ navigation }) {
	return (
		<Navigator />
	);
}
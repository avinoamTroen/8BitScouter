import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import TeleOp from '../screens/teleop';
import Auto from '../screens/auto';

const screens = {
    Home: {
        screen: Home,
    },
    ReviewDetails: {
        screen: ReviewDetails,
    },
    TeleOp: {
        screen: TeleOp,
    },
    Auto: {
        screen: Auto,
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
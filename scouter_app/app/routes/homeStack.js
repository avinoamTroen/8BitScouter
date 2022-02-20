import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import PreGame from '../screens/preGame';
import Auto from '../screens/auto';
import TeleOp from '../screens/teleop';
import EndGame from '../screens/endGame';
import PostGame from '../screens/postGame';

// put all screens from homestack here
// this file takes care of the main navigation (the stack from the homeScreen) - probably the only stack
const screens = {
    Home: {
        screen: Home,
    },
    PreGame: {
        screen: PreGame,
    },
    Auto: {
        screen: Auto,
    },
    TeleOp: {
        screen: TeleOp,
    },
    EndGame: {
        screen: EndGame,
    },
    PostGame: {
        screen: PostGame,
    },

};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
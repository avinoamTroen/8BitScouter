import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Navigator from '../screens/navigator';
import PreGame from '../screens/preGame';
import Auto from '../screens/auto';
import TeleOp from '../screens/teleop';
import EndGame from '../screens/endGame';
import PostGame from '../screens/postGame';
import AfterAuto from '../screens/afterAuto';
import Home from '../screens/home.js';

// put all screens from Navigatorstack here
// this file takes care of the main navigation (the stack from the NavigatorScreen) - probably the only stack
const screens = {
    Home: {
        screen: Home,
    },
    Navigator: {
        screen: Navigator,
    },
    PreGame: {
        screen: PreGame,
    },
    Auto: {
        screen: Auto,
    },
    AfterAuto: {
        screen: AfterAuto,
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

// Navigator stack navigator screens
const NavigatorStack = createStackNavigator(screens);

export default createAppContainer(NavigatorStack);
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import Home from '../screens/home';
import GetSingleScout from '../screens/getSingleScout';
import GetTeamInfo from '../screens/getTeamInfo'
import GetTeamsList from '../screens/getTeamsList';
import GetRound from '../screens/getRound';


// put all screens from homestack here
// this file takes care of the main navigation (the stack from the homeScreen) - probably the only stack
const screens = {
    Home: {
        screen: Home,
    },
    GetTeamInfo: {
        screen: GetTeamInfo,
    },
    GetSingleScout: {
        screen: GetSingleScout,
    },
    GetTeamsList: {
        screen: GetTeamsList
    },
    GetRound: {
        screen: GetRound
    }

};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
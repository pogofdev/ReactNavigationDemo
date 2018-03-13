import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from "../screens/Detail/DetailsScreen";

export const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details:{
            screen: DetailsScreen,
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

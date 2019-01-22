import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Home} from './screens/Home.js';
import {Chat} from './screens/Chat.js';

export const Navigator = createStackNavigator(
  {
    Home: {screen: Home},
    Chat: {screen: Chat},
  }, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'blue',
    activeBackgroundColor: 'green',
    labelStyle: {
      fontSize: 20,
      padding: 12,
    }
  }
});





import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Home} from './screens/Home.js';
import {Chat} from './screens/Chat.js';

const HomeScreen = createStackNavigator({
  Home: {screen: Home}
});
const ChatScreen = createStackNavigator({
  Chat: {screen: Chat}
});

export const Navigator = createBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
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





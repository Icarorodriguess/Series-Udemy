import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem Vindo'
    }
  },
  Main : {
    screen: SeriesPage
  }
}, {
  defaultNavigationOptions: {
    title: 'Series',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#ff4133',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 30,
    }
  }
});
 
const AppContainer = createAppContainer(AppNavigator);
 
export default AppContainer;
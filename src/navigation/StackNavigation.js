import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/authentication/Login';
import SingUp from '../screen/authentication/SingUp';
import Walkthrough from '../screen/authentication/Walkthrough';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  );
}

export default StackNavigation;

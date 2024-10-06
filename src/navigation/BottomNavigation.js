import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screen/authentication/Login';
import SingUp from '../screen/authentication/SingUp';
import Home from '../screen/tabScreen/Home';
import Tutors from '../screen/tabScreen/Tutors';
import Sessions from '../screen/tabScreen/Sessions';
import Notifications from '../screen/tabScreen/Notifications';
import Chats from '../screen/tabScreen/Chats';
import {COLORS} from '../assets/Constants';
import CustomBottomTab from './CustomBottomTab';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.black,
      }}
      tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tutors" component={Tutors} />
      <Tab.Screen name="Sessions" component={Sessions} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;

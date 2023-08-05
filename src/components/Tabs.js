import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName='Current'
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#FFFD',
        tabBarActiveTintColor: '#000',
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          backgroundColor: '#FFFC',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          left: '2%',
          overflow: 'hidden',
          position: 'absolute',
          width: '96%',
        },
      }}
    >
      <Tab.Screen
        name='Upcoming'
        component={UpcomingWeather}
        options={{
          tabBarIcon: (props) => (
            <Feather name='clock' color={props.color} size={props.size} />
          ),
        }}
      />
      <Tab.Screen
        name='Current'
        component={CurrentWeather}
        options={{
          tabBarIcon: (props) => (
            <Feather name='cloud' color={props.color} size={props.size} />
          ),
        }}
      />
      <Tab.Screen
        name='City'
        component={City}
        options={{
          tabBarIcon: (props) => (
            <Feather name='map-pin' color={props.color} size={props.size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

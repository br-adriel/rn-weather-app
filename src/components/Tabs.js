import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';

const Tab = createBottomTabNavigator();

export default function Tabs({ weather }) {
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
        options={{
          tabBarIcon: (props) => (
            <Feather name='clock' color={props.color} size={props.size} />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name='Current'
        options={{
          tabBarIcon: (props) => (
            <Feather name='cloud' color={props.color} size={props.size} />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name='City'
        options={{
          tabBarIcon: (props) => (
            <Feather name='map-pin' color={props.color} size={props.size} />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

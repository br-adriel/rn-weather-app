import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import City from './src/screens/City';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Current'
        screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFFC',
            position: 'absolute',
            left: '2%',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
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
    </NavigationContainer>
  );
}

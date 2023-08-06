import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Tabs({ weather }) {
  return (
    <Tab.Navigator
      initialRouteName='Hoje'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarLabelPosition: 'beside-icon',
        tabBarBackground: () => (
          <BlurView
            style={StyleSheet.absoluteFill}
            intensity={80}
            tint='light'
          />
        ),
        tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          position: 'absolute',
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
      }}
    >
      <Tab.Screen
        name='Hoje'
        options={{
          tabBarIcon: (props) => (
            <Feather name='cloud' color={props.color} size={props.size} />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather} />}
      </Tab.Screen>
      <Tab.Screen
        name='Próximos dias'
        options={{
          tabBarIcon: (props) => (
            <Feather name='clock' color={props.color} size={props.size} />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import HighLowTemperatures from '../components/HighLowTemperatures';
import Location from '../components/Location';
import MessageCard from '../components/MessageCard';
import Temperature from '../components/Temperature';
import WeatherImageBg from '../components/WeatherImageBg';
import { weatherTypes } from '../utils/weatherTypes';

function CurrentWeather({ weatherData }) {
  const padBottom = useBottomTabBarHeight();

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData.list[0];
  const { name, country, sunrise, sunset } = weatherData.city;
  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView style={[styles.wrapper, { paddingBottom: padBottom }]}>
      <StatusBar backgroundColor='transparent' translucent />
      <WeatherImageBg weatherCondition={weatherCondition}>
        <LinearGradient
          style={styles.wrapper}
          colors={[
            'transparent',
            ...weatherTypes[weatherCondition].gradientColors,
          ]}
        >
          <ScrollView>
            <View style={styles.container}>
              <View style={{ height: 200 }} />
              <Location country={country} name={name} />
              <Temperature
                feels={feels_like}
                temeperature={temp}
                unit='C'
                iconName={weatherTypes[weatherCondition].icon}
              />
              <HighLowTemperatures high={temp_max} low={temp_min} />
              <MessageCard
                title={weather[0].description}
                message={weatherTypes[weatherCondition].message}
              />
            </View>
          </ScrollView>
        </LinearGradient>
      </WeatherImageBg>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    gap: 8,
    paddingTop: 8 + (StatusBar.currentHeight || 0),
    paddingBottom: 16,
  },
  wrapper: {
    flex: 1,
  },
});

export default CurrentWeather;

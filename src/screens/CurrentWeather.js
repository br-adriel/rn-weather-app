import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import HighLowTemperatures from '../components/HighLowTemperatures';
import MessageCard from '../components/MessageCard';
import Temperature from '../components/Temperature';
import { weatherTypes } from '../utils/weatherTypes';

function CurrentWeather({ weatherData }) {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor='transparent' translucent />
      <ImageBackground
        source={require('../../assets/img/bg_clouds.jpg')}
        style={styles.image}
      >
        <View style={styles.container}>
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
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    gap: 8,
    paddingTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
    objectFit: 'cover',
  },
  wrapper: {
    flex: 1,
  },
});

export default CurrentWeather;

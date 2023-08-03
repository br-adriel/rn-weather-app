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

function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor='transparent' translucent />
      <ImageBackground
        source={require('../../assets/img/bg_clouds.jpg')}
        style={styles.image}
      >
        <View style={styles.container}>
          <Temperature feels={5} temeperature={6} unit='C' />
          <HighLowTemperatures high={8} low={6} />
          <MessageCard
            title="It's sunny"
            message="It's the perfect time for T-shirts"
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

import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../components/Card';
import HighLowTemperatures from '../components/HighLowTemperatures';
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
          <Card style={{ padding: 16 }}>
            <Text style={styles.description}>It's sunny</Text>
            <Text style={styles.message}>It's a perfect Tshirt weather</Text>
          </Card>
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
  description: {
    fontSize: 32,
  },
  image: {
    flex: 1,
    objectFit: 'cover',
  },
  message: {
    fontSize: 18,
  },
  wrapper: {
    flex: 1,
  },
});

export default CurrentWeather;

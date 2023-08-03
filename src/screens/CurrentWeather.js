import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Temperature from '../components/Temperature';
import Card from '../components/Card';

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
          <View style={styles.highLowWrapper}>
            <Card style={styles.highLow}>
              <Text style={styles.highLowtext}>High: 8</Text>
            </Card>
            <Card style={styles.highLow}>
              <Text style={styles.highLowtext}>Low: 6</Text>
            </Card>
          </View>
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
  highLow: {
    padding: 16,
    flexGrow: 1,
  },
  highLowtext: {
    fontSize: 20,
    textAlign: 'center',
  },
  highLowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
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

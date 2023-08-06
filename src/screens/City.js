import dayjs from 'dayjs';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Badge from '../components/Badge';

const formatter = new Intl.NumberFormat('pt-BR', {
  notation: 'compact',
});

function City({ weatherData }) {
  const { name, country, population, sunrise, sunset } = weatherData;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='transparent' translucent />
      <ImageBackground
        source={require('../../assets/img/bg_city.jpg')}
        style={styles.image}
      >
        <Text style={[styles.titleText, styles.cityName]}>
          {name}, {country}
        </Text>

        <View style={styles.cityInfoWrapper}>
          <Badge iconName='user' text={formatter.format(population)} />
          <Badge
            iconName='sunrise'
            text={dayjs.unix(sunrise).format('HH:mm')}
          />
          <Badge iconName='sunset' text={dayjs.unix(sunset).format('HH:mm')} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cityInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 12,
  },
  cityName: {
    fontSize: 40,
    marginTop: 8,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
  titleText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default City;

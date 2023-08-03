import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

function City() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='transparent' translucent />
      <ImageBackground
        source={require('../../assets/img/bg_city.jpg')}
        style={styles.image}
      >
        <Text style={[styles.titleText, styles.cityName]}>London, UK</Text>

        <View style={styles.cityInfoWrapper}>
          <View style={styles.cityInfo}>
            <Feather name='user' size={20} />
            <Text>8000</Text>
          </View>
          <View style={styles.cityInfo}>
            <Feather name='sunrise' size={20} />
            <Text>05:22</Text>
          </View>
          <View style={styles.cityInfo}>
            <Feather name='sunset' size={20} />
            <Text>17:25</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cityInfo: {
    backgroundColor: '#FFFA',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    gap: 4,
  },
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
  countryName: {
    fontSize: 30,
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

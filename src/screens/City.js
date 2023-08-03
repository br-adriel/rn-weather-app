import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Badge from '../components/Badge';

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
          <Badge iconName='user' text='8000' />
          <Badge iconName='sunrise' text='05:22' />
          <Badge iconName='sunset' text='17:25' />
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

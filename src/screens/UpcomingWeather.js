import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import ListItem from '../components/ListItem';

function UpcomingWeather({ weatherData }) {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      <ImageBackground
        source={require('../../assets/img/bg_clouds.jpg')}
        style={styles.image}
      >
        <Text style={styles.title}>Upcoming</Text>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    paddingTop: StatusBar.currentHeight || 0,
    flex: 1,
    objectFit: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default UpcomingWeather;

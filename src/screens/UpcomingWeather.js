import { Feather } from '@expo/vector-icons';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';

const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
];

function Item({ dt_txt, min, max, condition }) {
  return (
    <View style={styles.item}>
      <Feather name='sun' size={50} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
}

function UpcomingWeather() {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      max={item.main.temp_max}
      min={item.main.temp_min}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      <ImageBackground
        source={require('../../assets/img/background.jpg')}
        style={styles.image}
      >
        <Text style={styles.title}>Upcoming</Text>
        <FlatList
          data={DATA}
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
  date: {
    fontSize: 15,
  },
  item: {
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFD',
  },
  image: {
    paddingTop: StatusBar.currentHeight || 0,
    flex: 1,
    objectFit: 'cover',
  },
  temp: {
    fontSize: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default UpcomingWeather;

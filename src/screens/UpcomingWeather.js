import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';
import {
  FlatList,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import { weatherTypes } from '../utils/weatherTypes';

function UpcomingWeather({ weatherData }) {
  const paddingBottom = useBottomTabBarHeight();

  const data = {};
  weatherData.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    if (dayjs().format('DD/MM') !== dayjs(date).format('DD/MM')) {
      if (!data[date]) {
        data[date] = [];
      }
      data[date].push(item);
    }
  });

  const arrayData = Object.keys(data).map((key) => {
    return {
      title: key,
      data: data[key],
    };
  });

  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={[styles.container, { paddingBottom: paddingBottom }]}>
      <StatusBar translucent backgroundColor='transparent' />
      <LinearGradient
        colors={weatherTypes[weatherData[0].weather[0].main].gradientColors}
        style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0 }}
      >
        <SectionList
          contentContainerStyle={{ paddingVertical: 8 }}
          sections={arrayData}
          renderItem={() => null}
          keyExtractor={(item) => item.dt_txt}
          ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
          renderSectionHeader={({ section }) => (
            <View style={{ gap: 8 }}>
              <Card
                style={{
                  padding: 8,
                  alignSelf: 'flex-start',
                  marginLeft: 16,
                }}
              >
                <Text>{dayjs(section.title).format('DD/MM')}</Text>
              </Card>
              <FlatList
                data={section.data}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                contentContainerStyle={{ paddingHorizontal: 16 }}
              />
            </View>
          )}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default UpcomingWeather;

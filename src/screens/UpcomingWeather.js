import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';
import {
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import DateWeatherOverview from '../components/DateWeatherOverview';
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
            <DateWeatherOverview data={section.data} title={section.title} />
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

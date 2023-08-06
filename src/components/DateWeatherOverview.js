import dayjs from 'dayjs';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import WeatherOverview from './WeatherOverview';

function DateWeatherOverview({ title, data }) {
  return (
    <View style={{ gap: 8 }}>
      <Card style={styles.card}>
        <Text>{dayjs(title).format('DD/MM')}</Text>
      </Card>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <WeatherOverview
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 8,
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
});

export default DateWeatherOverview;

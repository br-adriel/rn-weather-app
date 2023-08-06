import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { weatherTypes } from '../utils/weatherTypes';
import dayjs from 'dayjs';

function ListItem({ dt_txt, min, max, condition }) {
  return (
    <View style={styles.item}>
      <Text style={styles.date}>{dayjs(dt_txt).format('HH:mm')}</Text>
      <Feather name={weatherTypes[condition].icon} size={64} />
      <View style={styles.tempWrapper}>
        <Feather name='thermometer' size={16} />
        <Text style={styles.temp}>
          {min.toFixed(1)}/{max.toFixed(1)}°C
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#FFFC',
    borderRadius: 8,
    gap: 4,
    padding: 20,
  },
  temp: {
    fontSize: 18,
  },
  tempWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ListItem;

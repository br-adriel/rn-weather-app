import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

function SunriseSunset({ sunrise, sunset, humidity }) {
  return (
    <View style={styles.wrapper}>
      <Card style={styles.card}>
        <Feather name='sunrise' size={24} />
        <Text style={styles.text}>{dayjs.unix(sunrise).format('HH:mm')}</Text>
      </Card>
      <Card style={styles.card}>
        <Feather name='sunset' size={24} />
        <Text style={styles.text}>{dayjs.unix(sunset).format('HH:mm')}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    gap: 8,
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
});

export default SunriseSunset;

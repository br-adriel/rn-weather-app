import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

function Temperature({ temeperature, unit, feels }) {
  return (
    <Card style={{ padding: 12 }}>
      <View style={styles.wrapper}>
        <View style={styles.temperatureWrapper}>
          <Feather name='sun' size={100} />
          <View style={styles.temperature}>
            <Text style={styles.temperatureValue}>{temeperature}</Text>
            <Text style={styles.temperatureUnit}>°{unit}</Text>
          </View>
        </View>
        <Text style={styles.sensationText}>
          Feels like {feels}°{unit}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  sensationText: {
    fontSize: 20,
  },
  temperature: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 12,
  },
  temperatureUnit: {
    fontSize: 20,
    marginTop: 14,
  },
  temperatureValue: {
    fontSize: 64,
  },
  temperatureWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
  wrapper: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});

export default Temperature;

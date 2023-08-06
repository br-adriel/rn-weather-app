import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

function Wind({ speed, deg, gust }) {
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <View style={styles.info}>
          <MaterialCommunityIcons name='weather-windy' size={24} />
          <View style={styles.speedValue}>
            <Text style={styles.text}>{gust}</Text>
            <Text style={styles.speedUnit}>m/s</Text>
          </View>
        </View>
        <View style={styles.info}>
          <MaterialCommunityIcons name='speedometer' size={24} />
          <View style={styles.speedValue}>
            <Text style={styles.text}>{speed}</Text>
            <Text style={styles.speedUnit}>m/s</Text>
          </View>
        </View>
        <View style={styles.info}>
          <MaterialCommunityIcons name='angle-obtuse' size={24} />
          <Text style={styles.text}>{deg}°</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    gap: 16,
    justifyContent: 'center',
    padding: 16,
  },
  info: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    gap: 8,
    justifyContent: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  speedUnit: {
    marginBottom: 2,
  },
  speedValue: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 4,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Wind;

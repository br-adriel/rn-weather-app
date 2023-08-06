import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

function HighLowTemperatures({ high, low }) {
  return (
    <View style={styles.highLowWrapper}>
      <Card style={styles.highLow}>
        <Text style={styles.highLowtext}>Mínima: {low}°C</Text>
      </Card>
      <Card style={styles.highLow}>
        <Text style={styles.highLowtext}>Máxima: {high}°C</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  highLow: {
    padding: 16,
    flexGrow: 1,
  },
  highLowtext: {
    fontSize: 20,
    textAlign: 'center',
  },
  highLowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
});

export default HighLowTemperatures;

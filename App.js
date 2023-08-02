import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name='sun' size={100} />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>It's a perfect Tshirt weather</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
  },
  highLow: {
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  message: {
    fontSize: 30,
  },
  temp: {
    fontSize: 48,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
});

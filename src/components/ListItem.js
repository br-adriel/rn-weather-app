import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

function ListItem({ dt_txt, min, max, condition }) {
  return (
    <View style={styles.item}>
      <Feather name='sun' size={50} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  temp: {
    fontSize: 20,
  },
});

export default ListItem;

import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

function Badge({ iconName, text }) {
  return (
    <View style={styles.badgeWrapper}>
      <Feather name={iconName} size={20} />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeWrapper: {
    backgroundColor: '#FFFC',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    gap: 4,
  },
});

export default Badge;

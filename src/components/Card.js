import { StyleSheet, View } from 'react-native';

function Card({ children }) {
  return <View style={styles.wrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFC',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default Card;

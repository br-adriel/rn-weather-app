import { StyleSheet, View } from 'react-native';

function Card({ children, style }) {
  return <View style={[styles.wrapper, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFD',
    borderRadius: 8,
  },
});

export default Card;

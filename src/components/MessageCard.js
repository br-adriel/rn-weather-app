import { StyleSheet, Text } from 'react-native';
import Card from './Card';

function MessageCard({ title, message }) {
  return (
    <Card style={{ padding: 16 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  message: {
    fontSize: 18,
  },
});

export default MessageCard;

import { Feather } from '@expo/vector-icons';
import { Text } from 'react-native';
import Card from './Card';

function Location({ name, country }) {
  return (
    <Card
      style={{
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Text style={{ fontSize: 20 }}>
        {name}, {country}
      </Text>
      <Feather name='map-pin' size={20} />
    </Card>
  );
}

export default Location;

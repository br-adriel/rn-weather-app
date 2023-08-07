import { StatusBar, Text, View } from 'react-native';
import {Feather} from '@expo/vector-icons'

export default function Error() {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 8,
      }}
    >
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      <Feather name='frown' size={70} />
      <Text style={{fontSize: 20, marginTop: 16}}>Algo deu errado</Text>
    </View>
  );
}

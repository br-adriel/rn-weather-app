import { ActivityIndicator, StatusBar, View } from 'react-native';

export default function Loading() {
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
      <ActivityIndicator
        size='large'
        color='#000'
        style={{ marginTop: StatusBar.currentHeight || 0 }}
      />
    </View>
  );
}

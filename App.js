import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Tabs from './src/components/Tabs';
import Loading from './src/screens/Loading';
import * as Location from 'expo-location';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

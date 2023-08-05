import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import Tabs from './src/components/Tabs';
import Loading from './src/screens/Loading';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [weather, setWeather] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      setError('could not fetch weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      fetchWeatherData();
    })();
  }, []);

  if (loading) return <Loading />;
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  const fetchWeatherData = async () => {
    try {
      if (!location) return;
      const { latitude, longitude } = location.coords;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric&lang=pt_br`
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      setError('Could not fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        setError('Error getting current location');
      }
    })();
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  return [loading, error, weather];
};

import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import Error from './src/screens/Error';
import Loading from './src/screens/Loading';

export default function App() {
  const [loading, error, weather] = useGetWeather();

  if (weather)
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  if (error) return <Error />
  return <Loading />
}

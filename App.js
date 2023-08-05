import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import Loading from './src/screens/Loading';

export default function App() {
  const [loading, error, weather] = useGetWeather();

  if (weather)
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  return <Loading />;
}

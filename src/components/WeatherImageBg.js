import { ImageBackground } from 'react-native';

function WeatherImageBg({ children, weatherCondition }) {
  switch (weatherCondition) {
    case 'Clear':
      return (
        <ImageBackground
          source={require('../../assets/img/bg/clear.jpg')}
          style={{ flex: 1 }}
        >
          {children}
        </ImageBackground>
      );
    case 'Drizzle':
      return (
        <ImageBackground
          source={require('../../assets/img/bg/drizzle.jpg')}
          style={{ flex: 1 }}
        >
          {children}
        </ImageBackground>
      );
    case 'Haze':
      return (
        <ImageBackground
          source={require('../../assets/img/bg/haze.jpg')}
          style={{ flex: 1 }}
        >
          {children}
        </ImageBackground>
      );
    case 'Mist':
      return (
        <ImageBackground
          source={require('../../assets/img/bg/mist.jpg')}
          style={{ flex: 1 }}
        >
          {children}
        </ImageBackground>
      );
    case 'Rain':
      return (
        <ImageBackground
          source={require('../../assets/img/bg/rain.jpg')}
          style={{ flex: 1 }}
        >
          {children}
        </ImageBackground>
      );
    case 'Snow':
      return (
        <ImageBackground
          source={require('../../assets/img/bg/snow.jpg')}
          style={{ flex: 1 }}
        >
          {children}
        </ImageBackground>
      );
    case 'Thunderstorm':
      return (
        <ImageBackground
          source={require('../../assets/img/bg/thunderstorm.jpg')}
          style={{ flex: 1 }}
        >
          {children}
        </ImageBackground>
      );
    default:
      return (
        <ImageBackground
          source={require('../../assets/img/bg/clouds.jpg')}
          style={{ flex: 1 }}
        >
          {children}
        </ImageBackground>
      );
  }
}

export default WeatherImageBg;

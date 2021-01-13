import React from 'react';
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'
import Warning from './components/warning'

const API_key = 'a002b658e6131a5b379856e51658bcbc'


class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (event) => {
    event.preventDefault()
    const city = event.target.elements.city.value;

    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
    const data = await api_url.json()
    console.log(data)

    const sunset = data.sys.sunset
    const date = new Date()
    date.setTime(sunset)
    const sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

    const sunrise = data.sys.sunrise
    const date_sunrise = new Date()
    date_sunrise.setTime(sunrise)
    const sunrise_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()



    if (city != null) {


      this.setState({
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: ''
      })
    }
    else {
      <Warning />
    }
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherCall={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          feels_like={this.state.feels_like}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App;
import React, {Component} from 'react';
import './App.css';
import Search from './components/search/Search'
import Result from './components/result/Result'

const APIKey = 'c15e19c5524c0e99c9ad66fd1632e8bf'

class App extends Component{
  state={
    value:'',
    date:'',
    city:'',
    sunrise:'',
    sunset:'',
    temp:'',
    pressure:'',
    wind:'',
    err: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error('Error trying to get the data')
    })
    .then(response => response.json())
    .then (data => {
      const time = new Date().toLocaleString()
      this.setState(prevState =>({
        err: false,
        date:time,
        city:prevState.value,
        sunrise: data.sys.sunrise,
        sunset:data.sys.sunset,
        temp:data.main.temp,
        pressure:data.main.pressure,
        wind:data.wind.speed,
      }))
    })
    .catch(err => {
      console.log(err)
      this.setState(prevState => ({
        err: true,
        city: prevState.value
      }))
    })
  }

  render(){
    return (
    
        <div className='container'>
          <div className='mycontainer'>
              <Search 
                value={this.state.value} 
                handleInputChange={this.handleInputChange}
                handleCitySubmit={this.handleCitySubmit}
              />
          </div>

            <Result 
              weather={this.state}
            />
        </div>
    
    )
  }
}

export default App;

import React from "react";
import {Cards, Country, Chart} from './components';
import {fetchData} from "./api/indexAPI";
import styles from './App.module.css';
import stylescovid from './App.module.css';
import image from './images/image.png';
import covid from './images/covid.png';
import covid2 from './images/covid.png';
import covid3 from './images/covid.png';

class App extends React.Component{

     state = {
        data : {},
        country : '',
      }
  
  async componentDidMount(){
     const fetchedData = await fetchData(); 
     this.setState({data : fetchedData});
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data : fetchedData, country : country});
  }

  
  render() {
    const {data, country} = this.state;

    return(
      <React.Fragment>
      <div className="App">
       <header className="App-header">
       <div className = {styles.container}>
        <img className={stylescovid.covid} src={covid} alt="COVID-19" />
          <img className={styles.image} src={image} alt="COVID-19" />
          <Cards data = {data}/>
          <Country handleCountryChange={this.handleCountryChange} /> 
          <Chart data = {data} country = {country}/>
          <img className={stylescovid.covid2} src={covid2} alt="COVID-19" />  
          <img className={stylescovid.covid3} src={covid3} alt="COVID-19" />
        </div>
        </header>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
import React, {
  Component,
} from 'react';
import { connect } from 'react-redux';
import {updateWeather} from './ducks'

const week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
import { StyleSheet, css } from 'aphrodite';

export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast:null,
    }
  }
  componentDidMount() {
     this.props.updateWeather()
  }
  renderForecastItem(item,i) {
    return (
      <div key={i} className={css(styles.weatherForecasts)}>
          <span className={css(styles.weekDay)}>{week[today.getDay()+(i+1)]/* +1 to get tomorrow date and so on */}</span>
          <span className={css(styles.forecastTemps)}>{item.temp} ° C</span>
      </div>
    )
  }
  render() {
    const { forecast } = this.props;
    if(!forecast) return null;

    return (
      <div>
        <span className={css(styles.weatherTemp)}> {forecast.today.temp} ° C</span>
        <p className={css(styles.weatherMisc)}> Misc: {forecast.today.desc}  |  {forecast.today.windspeed} |  {forecast.today.hum} % HUM</p>

        {forecast.forecast.map((item,i) => this.renderForecastItem(item,i))}

      </div>
    );
  }
}

const styles = StyleSheet.create({
  weatherTemp: {
    fontSize: 80,
  },
  weatherMisc: {
    fontSize: 15,
  },
  forecastTemps: {
    float:'right'
  },
  weatherForecasts: {
    width:'100%'
  },
  weekDay:{
    fontSize: 20,
  }

});

const mapStateToProps = (state, ownProps) => {
    return {
      forecast:state.forecast
    }
  }

const mapDispatchToProps = {
  updateWeather
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);

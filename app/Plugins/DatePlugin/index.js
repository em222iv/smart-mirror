import React, {
  Component,
} from 'react';

import { StyleSheet, css } from 'aphrodite';

export default class DatePLugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:null,
    }
  }
  componentDidMount() {
    this.setState({date: getFormattedDate()})
    setInterval(() => {
      this.setState({date: getFormattedDate()})
    },30000)
  }
  render() {
    const { date } = this.state;
    if(!date) return null;

    return (
      <div className={css(styles.dateContainer)}>
        <div className={css(styles.row)}>
          <span className={css(styles.place)}>Pyrolavägen 28, 18162, Lidingö</span>
        </div>
        <div className={css(styles.row)}>
          <span className={css(styles.dateDate)}>{date.dayText}, {date.month} {date.day} {date.year}</span>
        </div>
        <span className={css(styles.dateTime)}>{date.hour}:{date.min}</span>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  dateContainer:{
    marginTop:20
  },
  row:{
    width:'100%'
  },
  dateTime: {
    fontSize: 100,
  },
  dateDate: {
    fontSize: 30,
  },
  place: {
    fontSize: 20,
  }
});

const week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

function getFormattedDate() {
    let today = new Date();
    let day  = week[today.getDay()];
    let dd   = today.getDate();
    let mm   = months[today.getMonth()]; //January is 0!
    let yyyy = today.getFullYear();
    let hour = today.getHours();
    let minu = today.getMinutes();

    if(dd<10)  { dd='0'+dd }
    if(mm<10)  { mm='0'+mm }
    if(minu<10){ minu='0'+minu }

    return {dayText: day,day:dd,month:mm, year:yyyy, hour,min:minu}
}

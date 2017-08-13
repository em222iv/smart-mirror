import React, {
  Component,
} from 'react';

const week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
const today = new Date();
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
  }
  render() {
    const { date } = this.state;
    if(!date) return null;

    return (
      <div className="fadeIn">
        <p className={css(styles.dateDate)}>{date.dayText}, {date.month} {date.day} {date.year}</p>
        <span className={css(styles.dateTime)}>{date.hour}:{date.min}</span>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  dateTime: {
    fontSize: 100,
  },
  dateDate: {
    fontSize: 30,
  }
});

function getFormattedDate() {
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

import React, {Component} from 'react';
import { connect } from 'react-redux';

import Forecast from './Plugins/Forecast'
import DatePLugin from './Plugins/DatePlugin'
import Speech from './Plugins/Speech'

import { StyleSheet, css } from 'aphrodite';
import { fadeIn, fadeOut } from 'react-animations';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speechFade: css(styles.invisible)
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({speechFade: nextProps.listening ? css(styles.fadeIn) : css(styles.fadeOut)})
  }
  render() {
    const {speechFade} = this.state;
    return (
      <div className={css(styles.dashboard)}>
        <div className={css(styles.topContainer)}>
          <div className={css(styles.leftContainer, styles.fadeIn)}>
            <DatePLugin />
          </div>
          <div className={css(styles.rightContainer, styles.fadeIn)}>
            <Forecast />
          </div>
        </div>
        <div className={speechFade}>
          <Speech />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  dashboard: {
      width:'100%'
  },
  fadeIn: {
      animation: 'fadeIn 3s',
      animationName: fadeIn,
      opacity:1
  },
  fadeOut: {
      animation: 'fadeOut 1s',
      animationName: fadeOut,
      opacity:0
  },
  invisible: {
    opacity:0
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width:'100%'
  },
  leftContainer: {
    margin:'50px'
  },
  rightContainer: {
    margin:'50px'
  }
});

const mapStateToProps = (state, ownProps) => {
    return {
      listening: state.speech.listening
    }
  }

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

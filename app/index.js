import React, {Component} from 'react';
import { connect } from 'react-redux';

import Forecast from './Plugins/Forecast'
import DatePLugin from './Plugins/DatePlugin'
import Speech from './Plugins/Speech'
import PluginContainer from './components/PluginContainer'

import { StyleSheet, css } from 'aphrodite';
import { fadeIn, fadeOut, zoomIn } from 'react-animations';

import Navi from './components/Navi'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speechFade: styles.invisible
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({speechFade: nextProps.listening ? styles.fadeIn : styles.fadeOut})
  }
  renderNavi() {
    const {listening} = this.props;
    return (
        <Navi />
    )
  }
  render() {
    const {speechFade} = this.state;
    return (
      <div className={css(styles.dashboard)}>

        <div className={css(styles.topContainer)}>
          <div className={css(styles.leftContainer, styles.fadeIn)}>
            <DatePLugin />
          </div>
          <div className={css(speechFade)}>
            {this.renderNavi()}
          </div>
          <div className={css(styles.rightContainer, styles.fadeIn)}>
            <Forecast />
          </div>
        </div>
        <div className={css(speechFade, styles.speechContainer)}>
          <Speech />
        </div>
        <PluginContainer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  dashboard: {
      width:'100%'
  },
  pluginContainer: {
    width:'100%',
    height:500,
    backgroundColor:'#9E9E9E',
    backgroundImage: 'url("http://www.orangesmile.com/destinations/img/stockholm-map-metro-big.gif")'
  },
  speechContainer:{
    height:250,
    marginTop:125,
    width:'100%',
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    background: 'rgba(4, 43, 56,0.8)'
  },
  fadeIn: {
      animation: 'fadeIn 2s',
      animationName: fadeIn,
      opacity:1
  },
  fadeOut: {
      animation: 'fadeOut 1s',
      animationName: fadeOut,
      opacity:0
  },
  zoomIn: {
      animation: '1s',
      animationName: zoomIn,
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
      listening: state.speech.listening,
    }
  }

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

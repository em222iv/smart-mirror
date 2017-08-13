import React, {Component} from 'react';
import { connect } from 'react-redux';

import { StyleSheet, css } from 'aphrodite';
import { fadeIn, fadeOut, zoomIn } from 'react-animations';
import {empty,listening} from '../../Plugins/Speech/ducks'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.plugin != undefined) {
      this.props.empty()
    }
    this.setState({
      plugin:nextProps.plugin
    })
  }

  renderCurrentPlugin() {
    const {plugin} = this.state;
    return (
      <div className={css(styles.pluginContainer, plugin ? styles.zoomIn : styles.fadeOut )}>
      </div>
    )
  }
  render() {
    const {plugin} = this.state;
    if(plugin === undefined) return null;
    return <div>{this.renderCurrentPlugin()}</div>
  }
}

const styles = StyleSheet.create({
  pluginContainer: {
    width:'100%',
    height:500,
    backgroundColor:'#9E9E9E',
    backgroundImage: 'url("http://www.orangesmile.com/destinations/img/stockholm-map-metro-big.gif")',
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
});

const mapStateToProps = (state, ownProps) => {
    return {
      plugin: state.plugins.plugin
    }
  }

const mapDispatchToProps = {
  empty,
  listening
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

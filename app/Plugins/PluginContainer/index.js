import React, {Component} from 'react';
import { connect } from 'react-redux';

import { StyleSheet, css } from 'aphrodite';
import { fadeIn, fadeOut, zoomIn } from 'react-animations';
import {empty,listening} from '../Speech/ducks'
import Map from '../Map'

export class pluginContainer extends Component {
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

    switch (plugin) {
      case 'Karta':
        return (
            <div className={css(styles.pluginContainer, plugin ? styles.zoomIn : styles.fadeOut )}>
            <Map place={plugin}/>
             </div>
           )
        break;
      default:
      return (
        <div className={css(styles.pluginContainer, plugin ? styles.zoomIn : styles.fadeOut )}>
        </div>
      )

    }
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
  console.log(state)
    return {
      plugin: state.plugincontainer.plugin
    }
  }

const mapDispatchToProps = {
  empty,
  listening
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(pluginContainer);

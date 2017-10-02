import React, {
  Component,
} from 'react';

import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import {getFullBridgeState, setLightOn, setLightOff} from './ducks'

export class PhilipsHue extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getFullBridgeState()
  }
  render() {
    return (
        <div className={css(styles.container)}>
        </div>
    );
  }
}

const styles = StyleSheet.create({ // styling if text confirmation will be needed when changes are made
  container: {
    position:'absolute',
    alignSelf:'center',
    left:'50%',
    bottom:0,
    marginLeft:-50
  },
});

const mapStateToProps = (state, ownProps) => {
    return {
      bridge: state.philipshue.bridge
    }
  }

const mapDispatchToProps = {
  getFullBridgeState,
  setLightOff,
  setLightOn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhilipsHue);

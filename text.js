import React, {
  Component,
} from 'react';

import { connect } from 'react-redux';

// App.js
export class SpeechText extends Component {
  render() {
    return (
      <div>
       <p>{this.props.text}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    text: state,
  }
);

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpeechText);

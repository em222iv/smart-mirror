import React, {
  Component,
} from 'react';

import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

export class Speech extends Component {
  constructor(props) {
    super(props);
  }
  renderSpokenText() {
    const {text} = this.props;
    if(!text) return null;
    return (
      <span>{" '' "+ text +" '' "}</span>
    )
  }
  render() {
    return (
        <div id="container">
          <div className={css(styles.text)}>
            <h1>Hey, What's up!?</h1>
          </div>
          <div className={css(styles.spokenText)}>
            {this.renderSpokenText()}
          </div>
        </div>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  spokenText: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width:'100',
  }
});

const mapStateToProps = (state, ownProps) => {
    return {
      listening: state.speech.listening,
      text: state.speech.text
    }
  }

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Speech);

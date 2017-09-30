import React, {PropTypes, Component} from 'react';

const K_WIDTH = 40;
const K_HEIGHT = 40;
import { StyleSheet, css } from 'aphrodite';
export default class Marker extends Component {

  render() {

    return (

         <div style={styles.marker}>
          <img src={"./assets/marker.ico"} width={33} height={33} style={{marginTop:-33}} />
            {this.props.text}
         </div>

    );
  }
}
const styles = StyleSheet.create({
  marker: {
    position: 'absolute',
  },

});

import React, { Component } from 'react';
import styles from './Star.scss';
import BeautyStars from 'beauty-stars';

export default class App extends Component {
  state = { value: 0,
  size :'11px' ,
  activeColor: '#1d99df'};
  
  render() {
    return (
      <div className={styles.wrapper}>
        <BeautyStars
          size = {this.state.size}
          value={this.state.value}
          activeColor ={this.state.activeColor}
          onChange={value => this.setState({ value })}
          
        />
      </div>
    );
  }
}

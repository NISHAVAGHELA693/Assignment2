import React, { Component } from 'react'
import RootStackNavigation from './src/RootStackNavigation'
import { NavigationContainer } from '@react-navigation/native';
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootStackNavigation/>
      </NavigationContainer>
    )
  }
}
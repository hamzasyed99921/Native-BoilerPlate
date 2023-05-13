import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <View>
      <Text>App</Text>
      <Icon name="account" size={30} color="#900" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
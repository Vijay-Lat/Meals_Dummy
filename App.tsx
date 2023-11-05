import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { colors } from './utils/colors'
import Focus from './Focus'

const App = () => {
  const appStyle = StyleSheet.create({
    safeAreaContainer:{
      backgroundColor:colors.violet,
      flex:1,
    }
  })
  return (
    <SafeAreaView style={appStyle.safeAreaContainer}>
      <StatusBar backgroundColor={"red"}/>
    <Focus/>
      
    </SafeAreaView>
  )
}

export default App

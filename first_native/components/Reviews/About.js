import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'

function About() {
    
  return (
    <View style={globalStyles.container}>
        <Text>About</Text>
    </View>
  )
} 

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default About
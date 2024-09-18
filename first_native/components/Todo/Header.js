import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Header() {
  return (
      <View style={styles.container }>
       <Text style={styles.text}>todo</Text>   
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#f34290',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'nunito-bold'
    }
})

export default Header
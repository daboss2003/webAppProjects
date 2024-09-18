import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
              <Text style={styles.buttonText}>{ text }</Text>  
        </View>   
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f4511e'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default CustomButton
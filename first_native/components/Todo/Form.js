import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

function Form({handleCreateTodo}) {
  const [input, setInput] = useState('')
  return (
    <View style={styles.container}>
      <TextInput placeholder={'Enter TODO'} value={input} onChangeText={(val) => setInput(val)} style={styles.input} /> 
      <Button title={'Add todo'} color={'#f34290'} onPress={() => {
        handleCreateTodo(input)
        setInput('')
      }} />
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginHorizontal: 'auto',
        padding: 30, 
        
  },
  input: {
      borderBottomWidth: 1,
      borderBottomColor: '#f34290',
      marginBottom: 10,
      paddingVertical: 6,
    paddingHorizontal: 8,
      fontFamily: 'nunito-regular'
  },
  
})

export default Form
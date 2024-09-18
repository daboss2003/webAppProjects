import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import {AntDesign} from '@expo/vector-icons'

function TodoItem({ item, handleComplete, handleDelete }) {
  
  
  return (
    <View style={styles.container}>
      <Text style={item.completed ? styles.text : styles.textNone}>{item.title}</Text>
      <View style={styles.buttons}>
        <TouchableHighlight onPress={() => handleDelete(item.id)} underlayColor={'rgba(0, 0, 0, 0.2)'} style={styles.button}>
          <AntDesign name='delete' size={22} color={'#f34290'} />
        </TouchableHighlight>
        <TouchableHighlight onPress={()=> handleComplete(item.id)} underlayColor={'rgba(0, 0, 0, 0.2)'} style={styles.button}>
          <AntDesign name={item.completed ? 'checkcircle' : 'checkcircleo'} size={22} color={'#f34290'} />
        </TouchableHighlight>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
    padding: 10,
    borderColor: 'red',
    borderStyle: 'dashed',
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    textDecorationLine: 'line-through',
    fontSize: 15,
    fontFamily: 'nunito-regular'
  },
  textNone: {
    fontSize: 15,
    fontFamily: 'nunito-regular'
  },
  buttons: {
    flexDirection: 'row-reverse',
    width: '30%',
    justifyContent: 'space-around',
  },
  button:{
    padding: 10,
    borderRadius: 5
  }
})
export default TodoItem
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function Example() {
  const [name, setName] = useState('Samson');
  const [people, setPeople] = useState([
    { name: 'julia', id: 1 },
    { name: 'rashford', id: 2 },
    { name: 'skalla', id: 3 },
    { name: 'milakia', id: 4 },
    
  ])
  const nameArray = ['Samson', 'Jackson', 'Peterson', 'Johnson', 'Kimson', 'julia', 'rashford', 'skalla', 'milakia'];
  const random = Math.floor(Math.random() * nameArray.length);
  function changeName() {
    setName(nameArray[random]);
  }

  function handlePeople(id) {
    setPeople((prev) => 
      [...prev.filter(item => item.id !== id), {name: nameArray[random], id}]
    )
  }
  return (
    <View style={styles.container}>
      <FlatList data={people} keyExtractor={(item) => item.id} renderItem={({ item }) => (<TouchableOpacity onPress={() => handlePeople(item.id)}><Text style={styles.text}>Hello {item.name}</Text></TouchableOpacity>)} style={ styles.list} />
      <Text style={styles.text}>Hello { name }</Text>
      <Button title={'update name'} onPress={changeName} />
      <TextInput placeholder={'eg: jackson'} onChangeText={(val) => setName(val)} style={styles.input} /> 
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor: '#f34290',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    padding: 4,
    fontFamily: 'nunito-regular'
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    padding: 4,
    width: 300,
    margin: 15,
  },
  list: {
    paddingTop: 40,
  }
});

import React, {useState} from 'react'
import { View, StyleSheet, FlatList,Alert,  } from 'react-native';
import TodoItem from './TodoItem';
import Form from './Form';

function TodoList() {
    const [todo, setTodo] = useState([
        { title: 'jump', id: 1, completed: false },
        { title: 'sleep', id: 2, completed: false },
    ]);

    function handleCreateTodo(text) {
        if (text.length < 3) {
            Alert.alert('SORRY', "Make sure your TODO's spelling  is more than 3 in length")
            return null
        }
        setTodo((prev) => [...prev, { title: text, id:  Date.now(), completed: false }]);
    }

    function handleComplete(id) {
        const update = todo.find(item => item.id === id)
        update.completed = !update.completed
        setTodo((prev) => [update, ...prev.filter(item => item.id !== id) ]);
    }

    function handleDelete(id) {
        setTodo((prev) => prev.filter(item => item.id !== id));
    }
    
  return (
      <View style={styles.container}>
          <Form handleCreateTodo={handleCreateTodo} />
          <View style={styles.listContainer}>
              <FlatList data={todo} keyExtractor={(item) => item.id} renderItem={({item}) => <TodoItem item={item} handleComplete={handleComplete} handleDelete={handleDelete} />} />
          </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    
    
    },
    listContainer: {
        padding: 30,
        flex: 1,
    }
})
export default TodoList
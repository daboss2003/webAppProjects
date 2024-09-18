import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, Text, Modal } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { data } from '../../assets/data'
import { MaterialIcons } from '@expo/vector-icons';
import Form from './Form'

function Home({ navigation }) {

    const [reviews, setReviews] = useState(data);
    const [modalOpen, setModalOpen] = useState(false);

    function gotoReview(data) {
        navigation.navigate('ReviewDetails', {data})
    }

    function addReview(review) {
        review.id = Date.now() - Math.floor(Math.random() * 1000);
        review.userId = Date.now();
        setReviews((prev) => [ review, ...prev ]);
        setModalOpen(false);
    }

  return (
    <View style={globalStyles.container}>
          <Modal visible={modalOpen} animationType='slide'>
              <View style={styles.modalContent}> 
                <MaterialIcons
                    name='close'
                    size={24}
                    style={{...styles.add, ...styles.close}}
                    onPress={() => setModalOpen(false) }
                  />
                <Form addReview={addReview} />
              </View>
          </Modal>
          <MaterialIcons
              name='add'
              size={24}
              style={styles.add}
              onPress={() => setModalOpen(true) }
          />
        <FlatList
            data={reviews}
            keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => gotoReview(item)} style={styles.container}>
                    <Text style={globalStyles.titleText}>{ item.title }</Text> 
                </TouchableOpacity>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderWidth: 1,
        borderColor: '#333',
        borderStyle: 'dashed',
        borderRadius: 5,
        margin: 8,
        minHeight: 60,
        justifyContent: 'center'
       
    },
    add: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f4511e',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    close: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex:1,
    }
})

export default Home
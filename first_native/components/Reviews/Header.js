import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Header({ title }) {

  return (
    <View style={styles.header}>
         <Image source={require('../../assets/heart_logo.png')} style={styles.headerImage}/> 
        <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
    },
   headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
  
});
import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import {getRatings} from '../../assets/data'

function ReviewDetails({ route }) {
    const { data } = route.params
    const ratings = getRatings(data.ratings)
  return (
    <View style={globalStyles.container}>
        <ImageBackground style={styles.container} source={require('../../assets/game_bg.png')}>
            <Text style={globalStyles.titleText}>Title: {data.title}</Text>
            <Text style={globalStyles.titleText}>Creator: User{data.userId}</Text> 
            <Text style={styles.text}>{data.body}</Text>
            <View style={styles.rating}>
                <Text>GameZone rating: </Text> 
                <Image source={ratings} />
            </View>   
        </ImageBackground>
    </View>
  )
} 

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#333',
        borderStyle: 'dashed',
        borderRadius: 5,
    },
    text: {
        fontFamily: 'nunito-regular',
        marginVertical: 8,
        lineHeight : 15
    },
    rating: {
        flexDirection: 'row'
    }
})

export default ReviewDetails
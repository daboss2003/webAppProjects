import React from "react";
import { View, StyleSheet, Button, TextInput, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { Formik } from "formik";
import * as yup from 'yup';
import CustomButton from "./Button";


const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  ratings: yup.string().required().test('is-num-1-5', 'Rating must be a numder from 1- 5', (val) => {
    return parseInt(val) < 6 && parseInt(val) > 0;
  })
})

function Form({ addReview }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ title: '', body: '', ratings: '' }}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            addReview(values)
            actions.resetForm()
          }}
          >
            {(props) => (
              <View>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="Review title"
                    onChangeText={props.handleChange('title')}
                    value={props.values.title}
                    onBlur={props.handleBlur('title')}
                 />  
                  <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title }</Text>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="Review body"
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}
                    multiline
                    onBlur={props.handleBlur('body')}
                  />  
                  <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body }</Text>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="Rating (1-5)"
                    onChangeText={props.handleChange('ratings')}
                    value={props.values.ratings}
                    inputMode="numeric"
                    onBlur={props.handleBlur('ratings')}
                  />
                  <Text style={globalStyles.errorText}>{props.touched.ratings && props.errors.ratings }</Text>
                  <CustomButton text="submit" onPress={props.handleSubmit} />
              </View>
            )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Form
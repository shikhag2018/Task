import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Input,Button } from 'react-native-elements';
import Form1 from './Form1'
import Form2 from './Form2'

export default function screen3({navigation}){
  return (
       <ScrollView  contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}>
        <View style={styles.formContainer}>
        <Form1/>
        <Form2/>
        </View>
       </ScrollView>
  );

}

const styles = StyleSheet.create({
  
  container: {
    flex:1,

},
  contentContainer: {
    paddingVertical: 20,
    justifyContent:"center"
  },
  formContainer: {
        height: 400,
        padding:20
    },
});


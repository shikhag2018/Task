import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Text,
  StatusBar,
  BackHandler
} from 'react-native';
import { Input,Button } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import Form2 from './Form2'

export default class  screen2  extends React.Component{
  
render(){
  return (
    <View style={styles.container}>
       <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 ,justifyContent:"center"}}
          >
       <View style={styles.formContainer}>
       <Form2/>
       <View style={styles.subContainer}>
                <Button
                      style={styles.textInput}
                      buttonStyle={{backgroundColor:"green",borderRadius:15}}
                      title="Submit2"
                      onPress={() => {
                        this.props.navigation.navigate('screen3')
                      }} />
        </View>
        <View style={styles.subContainer}>
                <Button
                      style={styles.textInput}
                      buttonStyle={{backgroundColor:"green",borderRadius:15}}
                      title="Back"
                      onPress={() => {this.props.navigation.goBack()} }/>
        </View>
      </View>
     </KeyboardAvoidingView>
    </View>
  );

}
}

const styles = StyleSheet.create({
  
  container: {
    flex:1,
    //justifyContent:"center"
},
formContainer: {
        height: 300,
        padding:20
    },
    subContainer: {
        marginBottom: 20,
        padding: 5,
    },
contentContainer:{
   justifyContent:"center",
   //alignItems:"center"
}
});


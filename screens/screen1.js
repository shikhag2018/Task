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

export default class  screen1 extends React.Component{
render(){
  return (
    <View style={styles.container}>
     <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 ,justifyContent:"center"}}
          >
     <View style={styles.formContainer}>
       <Form1/>
         <View style={styles.subContainer}>
                  <Button
                      style={styles.textInput}
                      buttonStyle={{backgroundColor:"green",borderRadius:15}}
                      title="Submit"
                      onPress={() => {
                        this.props.navigation.navigate('screen2')
                  }} />
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


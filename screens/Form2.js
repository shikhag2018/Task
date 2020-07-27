import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';
import { Input ,Icon} from 'react-native-elements';

export default class  Form2 extends React.Component{
constructor(){
  super()
  this.state={
    number:"",
    age:"",
  }
}


render(){
  return (
      <View >
        <View style={styles.subContainer}>
        <TextInput  
          style={{height:50, backgroundColor: 'lightgrey', fontSize: 20,borderRadius:15,marginBottom:10}}  
          placeholder="mobile number"  
           onChangeText={(text)=>{this.setState({number:text})}}
        /> 
        </View>
        <View style={styles.subContainer}>
        <TextInput  
          style={{height:50, backgroundColor: 'lightgrey', fontSize: 20,borderRadius:15,marginBottom:10}}  
          placeholder="your age"  
           onChangeText={(text)=>{this.setState({age:"text"})}}
        /> 
      </View>
       </View>
  
  
    );
}

}

const styles = StyleSheet.create({
  
  container: {
    flex:1,
},
  formContainer: {
        height: 400,
        padding: 20
    },
    subContainer: {
        marginBottom: 5,
        padding: 5,
    },
    textInput: {
        fontSize: 18,
        margin: 5,
        width: 200
    },
});


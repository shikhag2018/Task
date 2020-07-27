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
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default class Form1 extends React.Component{
constructor(){
	super()
	this.state={
		name:"",
		email:"",
		country:"uk"
	}
}


render(){
	return (
      
       <View >
        <View style={styles.subContainer}>
        <TextInput  
          style={{height:50, backgroundColor: 'lightgrey', fontSize: 20,borderRadius:15,marginBottom:10}}  
          placeholder="Username"  
           onChangeText={(text)=>{this.setState({name:text})}}
        /> 
        </View>
        <View style={styles.subContainer}>
        <TextInput  
          style={{height:50, backgroundColor: 'lightgrey', fontSize: 20,borderRadius:15,marginBottom:10}}  
          placeholder="your email"  
           onChangeText={(text)=>{this.setState({email:text})}}
         /> 
      </View>
       <View style={styles.subContainer}>
      <DropDownPicker
        items={[
        {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="green" />},
        {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="green" />},
        {label: 'India', value: 'france', icon: () => <Icon name="flag" size={18} color="green" />},
         ]}
         defaultValue={this.state.country}
          containerStyle={{height: 50}}
		    style={{backgroundColor: '#fafafa'}}
		    itemStyle={{
		        justifyContent: 'flex-start'
		    }}
		    dropDownStyle={{backgroundColor: '#fafafa'}}
		    onChangeItem={item => this.setState({
		        country: item.value
		    })}
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


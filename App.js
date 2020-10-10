import React from 'react';
import {View, Text, Image, TextInput, Dimensions, StyleSheet, Button, TouchableOpacity, KeyboardAvoidingView} from "react-native";
const App = () => {
    return(
       
    <View style ={{flex:1,backgroundColor:'#80cbc4'}}>
        
​
        <View style={{flex:2}}>
            <Image style={styles.imageContainer} 
            source={require("./images/cart.png")}/>
        </View>
​
​
        <View style={{flex:1}}>
            <TextInput style={styles.textContainer} 
            placeholder=" Eposta Giriniz"  ></TextInput>
            <TextInput style={styles.textContainer} 
            placeholder=" Şifre Giriniz" ></TextInput>
        </View>
​
​
​
        <View style={{flex:2, alignItems:'center'}}>
            <TouchableOpacity style={styles.botton}><Text style={{color:'white', textAlign:'center'}}>Giriş yap</Text></TouchableOpacity>
            <TouchableOpacity style={styles.botton}><Text style={{color:'white',textAlign:'center'}}>Kayıt Ol</Text></TouchableOpacity>
            
        </View>
        
    
    </View>
    )
}
export default App;
const styles = StyleSheet.create({
   imageContainer:{
    width:Dimensions.get("window").width/2, 
    height:Dimensions.get("window").height/3,
    alignSelf:"center",
    },
    textContainer:{
        backgroundColor:'white',
        borderRadius: 10,
        margin:10
    },
    botton:{
      backgroundColor :'#546e7a', 
      width:Dimensions.get("window").width/2,
      marginVertical:10,
      padding:13,
      borderRadius:5,
    }
});
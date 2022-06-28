import * as React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native';


export default function Doctor ({navigation}){
  return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
        <View styles = {styles.Bg}>
          <ImageBackground source={require('../assets/Background.png')}  style={styles.image}>

            <Image source = {require('../assets/Logo.png')} style = {styles.LogoImage}></Image>

            <Image source={require('../assets/Title.png')} style = {styles.TitleImage}></Image>
             {/* <Text 
                onPress={() => alert('This is the "Doctor" screen.')}
                style={styles.text}>Doctor Screen</Text> */}

                <Image source={require('../assets/CategoriesPanel.png')} style = {styles.CategoriesContainer}></Image>

             </ImageBackground>
             
        </View>
  
           
        </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 26, 
    fontWeight: 'bold',
    justifyContent:'center'
  },
  LogoImage:{
      marginTop:15,
      marginLeft:41
  },
  TitleImage:{
      marginTop:5,
      marginLeft:-29,
      justifyContent:'center',
      alignItems:'center'
      
  },
  image:{
    height:766,
    width:390,
    marginLeft:10,
    marginBottom:50
    
  },
  CategoriesContainer:{
    marginLeft:15,
    marginRight:20
    
  }
   
 

  
})
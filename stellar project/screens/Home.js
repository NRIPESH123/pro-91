import React, { Component } from 'react';
import { Text, View,StyleSheet,SafeAreaView,StatusBar,TouchableOpacity,Platform,StatusBar,ImageBackground,Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style= {styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <ImageBackground source = {require('..../assets/stars.gif')}
                 styles={styles.backgroundImage}>

                 </ImageBackground>
                <View style = {styles.titleBar}>
                    <Text style = {styles.titleText}>ISS Trakcer App
                       
                    </Text>
                </View>
 
            <TouchableOpacity style = {styles.routeCard}>
             <Text style = {styles.routeText}>
                 ISS Location
                 </Text>
                 <Text style = {styles.knowMore}>
                     {"know more---->"}
                 </Text>
                <Image source = {require('..../assets/space_craft.png')}
                 styles={styles.routeImage}></Image>   
            </TouchableOpacity>
              <TouchableOpacity style = {styles.routeCard}>
                  <Text style = {styles.routeText}>
                      Meteors
                  </Text>
                  <Text style = {styles.knowMore}>
                      {"know more---->"}

                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.routeCard}>
             <Text style = {styles.routeText}>
                UpdateScreen
                 </Text>
                 <Text style = {styles.knowMore}>
                     {"know more---->"}
                 </Text>
            </TouchableOpacity>  
            </View>
        )
    }
}
const styles = StyleSheet.create({ container: { flex: 1 }, 
    droidSafeArea: {
         marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }, 
    titleBar: {
         flex: 0.15,
         justifyContent: "center",
          alignItems: "center" 
        }, 
        titleText: { 
            fontSize: 40,
             fontWeight: "bold",
              color: "white"
             },
routeCard: 
{ 
    flex: 0.25, 
    marginLeft: 50,
     marginRight: 50, 
     marginTop: 50, 
     borderRadius: 30, 
     backgroundColor: 'white' 
    }, 
    routeText: {
         fontSize: 35, 
         fontWeight: "bold", 
         color: "black", 
         marginTop: 75, 
         paddingLeft: 30 
        }, 
        knowMore: { 
            paddingLeft: 30,
             color: "red",
              fontSize: 15 },
              backgroundImage:{
                  flex:1,
                  resizeMode: 'cover',
              },
              routeImage: {
                  position: 'absolute',
                  top:-20,
                  height:80,
                  right:-15,
                  width: 80,
                  resizemode:'contain',
              } 
            }
            );
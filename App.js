import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button,TouchableOpacity } from 'react-native';
import Constants from "expo-constants"

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

//define some common Color variables
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

export default function App() {
  //create a array of images
  const imgData = [
    { id: 1, imgSource:require('./assets/Jennie-ava.jpg')},
    { id: 2, imgSource: require('./assets/Jennie.jpg') },
    { id: 3, imgSource: require('./assets/Jisoo-ava.jpg') },
    { id: 4, imgSource: require('./assets/Lisa-ava.jpg') },
    { id: 5, imgSource: require('./assets/Rose-ava.png') },
    { id: 6, imgSource: require('./assets/Rose.jpg') },
    { id: 7, imgSource: require('./assets/Lisa.png') },
    { id: 8, imgSource: require('./assets/Jisoo.jpg') }
  ]
  //create the center point of imgData
  const centerImgData = Math.floor(imgData.length / 2);

  //render function
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <MaterialIcons name="arrow-back" size={27} color="black" />
        <Entypo name="dots-three-vertical" size={27} color="black" />
      </View>

      <View style={styles.viewBio}>
        <Image   
          source={require('./assets/avatar.jpg')}
          style={styles.avatar}
          resizeMode= "cover" 
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>Huy Son Nguyen</Text>
          <Text style={styles.job}>Computer Scientist</Text>
          <View style={styles.viewButton}>

            <TouchableOpacity
              style={styles.followButton}
              onPress={ () => alert('Following') }
            >
              <Text style={{color: 'white', fontSize: 20}}>Follow</Text>
            </TouchableOpacity>
            <View style={styles.sendButton}>
              <Feather 
                name="send" 
                size={30} 
                color="white" 
                onPress= {() => alert('Message send')}
              />
            </View>  

          </View>
        </View>

      </View>

      <View style={styles.viewInfo} >  
        <View style={{flexDirection : 'column', alignItems:"center"}}> 
          <Text style={styles.name}>180</Text>
          <Text style={styles.job}> Photos </Text>
        </View>
        <View style={{flexDirection : 'column', alignItems:"center"}}> 
          <Text style={styles.name}>810k</Text>
          <Text style={styles.job}> Followers </Text>
        </View>
        <View style={{flexDirection : 'column', alignItems:"center"}}> 
          <Text style={styles.name}>118</Text>
          <Text style={styles.job}> Following </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView} >
        
        <View style={styles.viewImage}>
          {imgData.slice(0, centerImgData).map(item => {
            return <Image source={item.imgSource} style={styles.image} />
          })}
        </View>
      
        <View style={styles.viewImage}>
          {imgData.slice(centerImgData).map(item => {
            return <Image source={item.imgSource} style={styles.image} />
          })}
        </View>

      </ScrollView>
    </View>  
  );
}

//styling
const styles = StyleSheet.create({
  container:{
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 10
  },

  scrollView: {
    flexDirection: 'row',
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  headerView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  viewButton: {
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },

  followButton: {
    backgroundColor: FOLLOW_COLOR,
    //alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
    height: 25,                
    marginLeft: 20,
    marginTop: 10
  },

  sendButton: {
    backgroundColor: SEND_MESSAGE_COLOR,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
    width: 70,
    height: 40,
    borderRadius: 20,
  },

  viewBio: {
    //flex: 1,
    flexDirection:"row" ,
    marginVertical: 20,
    justifyContent: "center",
  },

  viewInfo:{
    flexDirection: 'row',
    //marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    
   
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 20,
    color: POLO_BLUE_COLOR,
  },

  job: {
    fontSize: 19,
    fontWeight: "normal",
    marginLeft: 20,
    color: "#696969"

  },

  image: {
    flex: 1,
    width: 175,
    height: 175,
    marginBottom: 15,
    borderRadius: 15,
  },

  viewImage: {
    flexDirection:'column',
    marginHorizontal: 10,
   
  }

});

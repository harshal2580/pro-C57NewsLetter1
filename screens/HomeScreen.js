import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return(
      <View>
      
       <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.buttonsContainer}
         onPress={() => this.props.navigation.navigate('JokeScreen')}>
        
         <Text>Read a Joke</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonsContainer}
         onPress={() => this.props.navigation.navigate('HoroScope')}>
        
         <Text>Horoscope</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonsContainer}
         onPress={() => this.props.navigation.navigate('WeatherScreen')}>
        
         <Text>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonsContainer}
         onPress={() => this.props.navigation.navigate('NewsScreen')}>
        
         <Text>Top News</Text>
        </TouchableOpacity>

       <View>
        <Text style={{textAlign:'center',marginTop:50}}>Rate us</Text>
        <TouchableOpacity style={styles.imageContainer}>
         <Image
          style={{width:50, height:50, marginLeft:100, marginTop:20}}
          source={require('../assets/thumbsdown.png')}
         />
        </TouchableOpacity>
        <TouchableOpacity>
         <Image
          style={{width:50, height:50, marginLeft:180, marginTop:-50}}
          source={require('../assets/thumbsup.png')}
         />
        </TouchableOpacity>
       </View>
       </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:50,
      marginLeft:80,
      borderRadius:30,
      borderColor:'black',
      borderWidth:3,
      width:200,
      height:50
  }
})
import React from 'react'
import { Dimensions,View,Text,TouchableOpacity, Linking,Image} from 'react-native'
import styles from './styles';

const height= Dimensions.get('window').height

const AboutScreen=() =>{
  return (
    <View style={{alignItems:"center", backgroundColor:"#fff",height:height}}>
      <View style={{paddingTop:20}}>
        <Image style={styles.weatherIcon} source={require('./assets/Weather.png')} />
      </View>
      <View>
        <Text style={styles.aboutHeading}>Weather</Text>
      </View>
      <View>
      <Text style={styles.aboutDesc}>Author : Shahadat Khokhar</Text>
      </View>
      <View>
      <Text style={{...styles.aboutDesc,paddingTop:10}}>Api Used: OpenWeather Api</Text>
      </View>
      <View>
      <Text style={{...styles.aboutDesc, paddingTop:15}}>For queries and suggestions contact: </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {Linking.openURL('mailto:khokharshahadat@gmail.com')}}>
          <Text style={{...styles.aboutDesc, fontStyle:"italic",fontSize:16}}>Khokharshahadat@gmail.com</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop:40}}>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://github.com/shahadatkhokhar/Weather')}}>
        <Image resizeMode='contain' style={styles.githubImg} source={require('./assets/GitHub_Logo.png')}/>
        </TouchableOpacity>
      </View>
      
      
    </View>
    
  )
}
export default AboutScreen;
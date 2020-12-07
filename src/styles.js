import {StyleSheet,Dimensions} from'react-native'

const width=Dimensions.get('window').width
const styles = StyleSheet.create({
    home:{
        flex:1,
        alignItems:"center",
        
    },
greeting: {
    paddingTop:15
},
greetingText:{
    paddingTop:20,
    fontSize:35,
    color:'#E3927F',
    fontWeight:"bold"  
},
cityName:{
    padding:10,
    color:'#223C5F',
    fontSize:20
},
currentWeatherIcon:{
    padding:10,
},
weatherTagline:{
    fontSize:16,
    color:'#223C5F',
},
currentTime:{
    fontSize:18,
    padding:8,
    color:'#223C5F',
},
furtherScroll:{
    flex:1,
    flexDirection:"row",
    backgroundColor:'#41689b',
    alignItems:"center",
    height:160,
},
furtherForcast:{
    padding:13,
    alignItems:"center"
},
furtherForcastTime:{
    color:'#fff',
},
upcomingItem:{
    flexDirection:"row",
    backgroundColor:'#41689b',
    width:width-10,
    padding:10,
    alignItems:"center",
    justifyContent:"space-around",
    borderRadius:50,
    marginTop:10,

},
upcomingDay:{
    fontSize:22,
    color:'#fff',
},
upcomingforecastDesc:{
    flexDirection:"column",
    alignItems:"center",

},
upcomingForecastText:{
    color:'#fff',
    fontSize:20,
},
aboutHeading:{
    fontSize:30,
    fontWeight:"bold",
    color:"#e3927f",
    padding:20
},
aboutDesc:{
    fontSize:18,
    color:"#223c5f",
    padding:10
},
githubImg:{
    width:100,
    height:100,
},
weatherIcon:{
    width:121,
    height:121,
}

})

export default styles;
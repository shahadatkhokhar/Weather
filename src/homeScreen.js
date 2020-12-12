import React,{useEffect,useState,Component} from 'react'
import {
  View,
  Text, 
  Image, 
  ScrollView,
  PermissionsAndroid, 
  ActivityIndicator,
  RefreshControl,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native'
import styles from './styles'
import Geolocation from '@react-native-community/geolocation';
import {ApiKeys}from './configs'
import SplashScreen from 'react-native-splash-screen';
import RNSettings from 'react-native-settings';
import { endEvent } from 'react-native/Libraries/Performance/Systrace';



let weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";


let wApiKey = ApiKeys.weatherApiKey
let hApiKey = ApiKeys.HereApiKey

class HomeScreen extends Component{
    state={
        lat:'',
        lon:'',
        forecast:{},
        loading:true,
        loadingLocation:true,
        weatherUrl:'',
        revGeocodeUrl:'',
        location:{},
        locStatus:false,
        locPermission:false
    }

    componentDidMount(){
    this.onStart()
    SplashScreen.hide() 
    }

    onStart=()=>{
      this.checkLocation()
      this.fetchData()
    }

    clearState=()=>{
      this.setState({lat:''})
      this.setState({lon:''})
      this.setState({forecast:{}})
      this.setState({loading:true})
      this.setState({loadingLocation:true})
    }

    checkLocation=()=>{
      RNSettings.getSetting(RNSettings.LOCATION_SETTING).then(result => {
        if (result == RNSettings.ENABLED) {
          console.log('location is enabled');
          this.setState({locStatus:true})
        } else {
          console.log('location is disabled');
          this.setState({locStatus:false})
        }
        
      });
    }

    openLocationSettings=()=>{
      RNSettings.openSetting(RNSettings.ACTION_LOCATION_SOURCE_SETTINGS).then(
        result => {
          if (result === RNSettings.ENABLED) {
            console.log('location is enabled {openlocationsettings}');
            this.setState({locStatus:true})
            this.clearState()
            this.onStart()
          }
        },
      );
    }

    fetchData = async()=>{
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the location");
          this.setState({locPermission:true})
          Geolocation.getCurrentPosition(info => {
            let la = info.coords.latitude
            let lo= info.coords.longitude
            this.setState({lat:la})
            this.setState({lon:lo})
            this.setState({weatherUrl:`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&exclude=minutely,alerts&units=metric&appid=${wApiKey}`})
            fetch(this.state.weatherUrl)
            .then(response => response.json())
            .then(results=> {
              this.setState({forecast:results})
            })
            .then(()=>this.setState({loading:false}))
            this.setState({revGeocodeUrl:`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${this.state.lat}%2C${this.state.lon}&lang=en-US&apiKey=${hApiKey}`})
            fetch(this.state.revGeocodeUrl)
            .then(response=>response.json())
            .then(results=>{
              this.setState({location:results})
            })
            .then(()=>this.setState({loadingLocation:false}))
            
          });
        } else {
          console.log("You cannot use the location");
        }
      } catch (err) {
        if(err.code===2)
          console.log(err)
          this.setState({locStatus:false})
      }
      return
    }
    
  formatTime = (unixTime)=>{
    let date = new Date(unixTime * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ':' + minutes.substr(-2)

    var unixTimeArray = formattedTime.split(":");

    var HH = parseInt(unixTimeArray[0]);
    var min = unixTimeArray[1];

    var AMPM = HH >= 12 ? "PM" : "AM";
    var hour;
    if(HH == 0){
      hour = HH + 12;
    } else if (HH > 12) {
      hour = HH - 12;
    } else {
      hour = HH;
    }
    var newFormatTime = hour + ":" + min + " " + AMPM;
    return newFormatTime
  }

  render(){
  if(this.state.locStatus==false)
  { 
    return(
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={()=>{
            this.clearState()
            this.onStart()
          }}
          colors={['#e3927f']}
          />}
          
      >
      <View style={{flex:1,alignItems:"center",}}>
        <Text style={{color:'#223c5f', padding:10,fontSize:15}}>Turn on your location to use Weather</Text>
        <TouchableOpacity
        onPress={this.openLocationSettings}
        style={styles.locationPrompt}>
          <Text >Turn On</Text>  
          </TouchableOpacity>
      </View>
      </ScrollView>
      )
  }
  else {
    
    if(this.state.loading===true||this.state.loadingLocation===true)
    {
      return (  
        <View style={{
          position:"absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems:"center",
          justifyContent:"center"}}>
          <ActivityIndicator size = 'large' color='#e3927f'/>
        </View>
        )
     }
    else
    {
    return ( 
      <ScrollView
      refreshControl={
        <RefreshControl
          
          onRefresh={()=>{
            this.clearState()
            this.onStart()
          }}
          colors={['#e3927f']}
          />}
      >
          <View style = {styles.home}>
          <StatusBar
              barStyle="light-content"
              backgroundColor='#223c5f'
              />
              <View style = {styles.greeting}>
                  <Text style = {styles.greetingText}>Today's Weather</Text>
              </View>
              <View >
                  <Text style = {styles.cityName}>{this.state.location.items[0].address.city}, {this.state.location.items[0].address.countryName}</Text>
              </View>
              <View>
                <Text style={styles.currentTime}>{this.formatTime(this.state.forecast.current.dt)}</Text>
              </View>
              <View style={styles.currentWeatherImg}>
                <Image source={{uri:`https://openweathermap.org/img/wn/${this.state.forecast.current.weather[0].icon}@4x.png`}} style = {{width:200,height:200}}/>
              </View>
              <View>
                <Text style={styles.weatherTagline}>{this.state.forecast.current.weather[0].description}</Text>
              </View>
              <View>
                <Text style={{...styles.weatherTagline, padding:6}}>{`Temp:${this.state.forecast.current.temp}℃, Humidity:${this.state.forecast.current.humidity}%`}</Text>
              </View>
              

              <ScrollView horizontal={true}>
                <View style={styles.furtherScroll}>
                    {
                    this.state.forecast.hourly.map(item=>{
                      let date = new Date(item.dt * 1000);
                      //get the day of month
                      let day = date.getDay()
      
                      let icon = 'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@4x.png'

                      return (
                        <View style={styles.furtherForcast}>
                          <Image source={{uri:icon}} style = {{width:90,height:90}}/>

                      <Text style={styles.furtherForcastTime}>{weekday[day]}, {this.formatTime(item.dt)}</Text>
                          <Text style={{...styles.furtherForcastTime, padding:2}}>{`${item.weather[0].description}`}</Text>
                          <Text style={{...styles.furtherForcastTime, paddingBottom:2}}>{item.temp.toPrecision(2)}℃ </Text>
                        </View>
                      )
                    })}
                </View>
              </ScrollView>
                  
              <View style = {{...styles.greeting,paddingBottom:25}}>
                  <Text style = {{...styles.greetingText, paddingTop:10}}>Upcoming</Text>
              </View>   
              {this.state.forecast.daily.map(item=>{
                      let date = new Date(item.dt * 1000);
                      //get the day from timestamp
                      let day = date.getDay()
                      return (
                        <View style = {styles.upcomingItem}>
                              <Text style = {styles.upcomingDay}>{weekday[day]}</Text>
                              <View style = {styles.upcomingforecastDesc}>
                                <Text style = {styles.upcomingForecastText}>{item.weather[0].description}</Text>
                                <Text style={{...styles.upcomingForecastText, fontSize:12}}>{`Temp: ${item.temp.day.toPrecision(2)}℃ Humidity: ${item.humidity}%`}</Text>
                              </View>
                        </View>  
              )
              })}
              

        </View>
    </ScrollView>
    )}
  }
  }
}

export default HomeScreen;
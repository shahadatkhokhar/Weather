import React from 'react'
import { View,Text, Image, ScrollView,FlatList,Card} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'


const HomeScreen = () =>{
  var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

  let date, hours, minutes, formattedTime,day,temprature,humidity,icon
  let data =[
    {
    "hourly": [
            {
            "dt": 1604754000,
            "temp": 285.03,
            "feels_like": 283.81,
            "pressure": 1020,
            "humidity": 93,
            "dew_point": 283.94,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 2.12,
            "wind_deg": 74,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1604757600,
            "temp": 286.47,
            "feels_like": 285.61,
            "pressure": 1020,
            "humidity": 90,
            "dew_point": 284.87,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 1.99,
            "wind_deg": 79,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1604761200,
            "temp": 289.4,
            "feels_like": 288.56,
            "pressure": 1021,
            "humidity": 82,
            "dew_point": 286.33,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 2.61,
            "wind_deg": 87,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1604764800,
            "temp": 292.39,
            "feels_like": 292.22,
            "pressure": 1020,
            "humidity": 75,
            "dew_point": 287.85,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 2.4,
            "wind_deg": 88,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1604768400,
            "temp": 294.7,
            "feels_like": 294.59,
            "pressure": 1020,
            "humidity": 69,
            "dew_point": 288.78,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 2.79,
            "wind_deg": 99,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1604772000,
            "temp": 296.03,
            "feels_like": 295.98,
            "pressure": 1019,
            "humidity": 65,
            "dew_point": 289.31,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 2.88,
            "wind_deg": 111,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0
          },
          {
            "dt": 1604775600,
            "temp": 296.92,
            "feels_like": 297.03,
            "pressure": 1019,
            "humidity": 61,
            "dew_point": 289.03,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 2.57,
            "wind_deg": 106,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0.06
          },
          {
            "dt": 1604779200,
            "temp": 297.36,
            "feels_like": 297.33,
            "pressure": 1018,
            "humidity": 58,
            "dew_point": 288.81,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 2.56,
            "wind_deg": 104,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0.14
          },
          {
            "dt": 1604782800,
            "temp": 297.27,
            "feels_like": 297.14,
            "pressure": 1017,
            "humidity": 59,
            "dew_point": 288.87,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 2.8,
            "wind_deg": 101,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0.17
          },
          {
            "dt": 1604786400,
            "temp": 296.54,
            "feels_like": 296.81,
            "pressure": 1016,
            "humidity": 66,
            "dew_point": 289.86,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 2.83,
            "wind_deg": 99,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0.15
          },
          {
            "dt": 1604790000,
            "temp": 293.9,
            "feels_like": 294.29,
            "pressure": 1016,
            "humidity": 76,
            "dew_point": 289.71,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 2.48,
            "wind_deg": 99,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "pop": 0.16
          }
      ],
      "daily": [
        {
          "dt": 1605463200,
          "sunrise": 1605444494,
          "sunset": 1605482024,
          "temp": {
            "day": 288.68,
            "min": 282.08,
            "max": 295,
            "night": 282.08,
            "eve": 284.1,
            "morn": 285.81
          },
          "feels_like": {
            "day": 283.62,
            "night": 279.04,
            "eve": 280.8,
            "morn": 281.13
          },
          "pressure": 1025,
          "humidity": 33,
          "dew_point": 272.57,
          "wind_speed": 4.25,
          "wind_deg": 345,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 0,
          "pop": 1,
          "rain": 1.18,
          "uvi": 3.66
        },
        {
          "dt": 1605549600,
          "sunrise": 1605530951,
          "sunset": 1605568391,
          "temp": {
            "day": 290.27,
            "min": 279.03,
            "max": 291.43,
            "night": 283.34,
            "eve": 285.02,
            "morn": 279.03
          },
          "feels_like": {
            "day": 287.57,
            "night": 280.96,
            "eve": 282.43,
            "morn": 276.59
          },
          "pressure": 1028,
          "humidity": 33,
          "dew_point": 274.08,
          "wind_speed": 1.18,
          "wind_deg": 169,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": 0,
          "pop": 0,
          "uvi": 3.55
        },
        {
          "dt": 1605636000,
          "sunrise": 1605617407,
          "sunset": 1605654760,
          "temp": {
            "day": 291.62,
            "min": 280.29,
            "max": 292.85,
            "night": 284.31,
            "eve": 286.8,
            "morn": 280.29
          },
          "feels_like": {
            "day": 288.71,
            "night": 281.37,
            "eve": 284.32,
            "morn": 277.54
          },
          "pressure": 1031,
          "humidity": 40,
          "dew_point": 277.87,
          "wind_speed": 2.44,
          "wind_deg": 79,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": 0,
          "pop": 0,
          "uvi": 3.54
        },
        {
          "dt": 1605722400,
          "sunrise": 1605703863,
          "sunset": 1605741131,
          "temp": {
            "day": 291.01,
            "min": 280.29,
            "max": 292.83,
            "night": 284.76,
            "eve": 287.09,
            "morn": 280.29
          },
          "feels_like": {
            "day": 287.46,
            "night": 281.44,
            "eve": 284.16,
            "morn": 277.15
          },
          "pressure": 1030,
          "humidity": 45,
          "dew_point": 279.05,
          "wind_speed": 3.68,
          "wind_deg": 150,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": 0,
          "pop": 0,
          "uvi": 3.59
        },
        {
          "dt": 1605808800,
          "sunrise": 1605790319,
          "sunset": 1605827503,
          "temp": {
            "day": 292.3,
            "min": 281.74,
            "max": 293.97,
            "night": 286.31,
            "eve": 288.01,
            "morn": 281.74
          },
          "feels_like": {
            "day": 288.95,
            "night": 283.91,
            "eve": 285.32,
            "morn": 278.5
          },
          "pressure": 1026,
          "humidity": 50,
          "dew_point": 281.77,
          "wind_speed": 4.28,
          "wind_deg": 185,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": 0,
          "pop": 0,
          "uvi": 3.48
        },
        {
          "dt": 1605895200,
          "sunrise": 1605876775,
          "sunset": 1605913877,
          "temp": {
            "day": 294.5,
            "min": 285.07,
            "max": 295.45,
            "night": 287.79,
            "eve": 290.22,
            "morn": 285.07
          },
          "feels_like": {
            "day": 293.57,
            "night": 286.59,
            "eve": 289.68,
            "morn": 283.49
          },
          "pressure": 1027,
          "humidity": 64,
          "dew_point": 287.62,
          "wind_speed": 3.26,
          "wind_deg": 180,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "clouds": 12,
          "pop": 0,
          "uvi": 3.54
        },
        {
          "dt": 1605981600,
          "sunrise": 1605963231,
          "sunset": 1606000253,
          "temp": {
            "day": 294.58,
            "min": 285.6,
            "max": 295.6,
            "night": 288.8,
            "eve": 290.8,
            "morn": 285.6
          },
          "feels_like": {
            "day": 294.63,
            "night": 287.87,
            "eve": 290.51,
            "morn": 284.61
          },
          "pressure": 1026,
          "humidity": 69,
          "dew_point": 288.69,
          "wind_speed": 2.5,
          "wind_deg": 155,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 22,
          "pop": 0.34,
          "rain": 0.31,
          "uvi": 3.47
        },
        {
          "dt": 1606068000,
          "sunrise": 1606049686,
          "sunset": 1606086630,
          "temp": {
            "day": 294.48,
            "min": 286.74,
            "max": 296.07,
            "night": 290.61,
            "eve": 291.59,
            "morn": 287.3
          },
          "feels_like": {
            "day": 292.55,
            "night": 289.74,
            "eve": 290.52,
            "morn": 285.67
          },
          "pressure": 1017,
          "humidity": 64,
          "dew_point": 287.52,
          "wind_speed": 4.68,
          "wind_deg": 174,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 98,
          "pop": 0.9,
          "rain": 0.84,
          "uvi": 3.46
        }
      ]
    }
  ]

  return ( 
    <ScrollView>
        <View style = {styles.home}>
            <View style = {styles.greeting}>
                <Text style = {styles.greetingText}>Today's Weather</Text>
            </View>
            <View >
                <Text style = {styles.cityName}>Indore, India</Text>
            </View>
            <View>
              <Text style={styles.currentTime}>02:00 PM</Text>
            </View>
            <View>
              <Image source={{uri:'https://openweathermap.org/img/wn/01d@4x.png'}} style = {{width:200,height:200}}/>
            </View>
            <View>
              <Text style={styles.weatherTagline}>Clear Sky</Text>
            </View>
            <View>
              <Text style={{...styles.weatherTagline, padding:6}}>Temp:29℃, Humidity:30%</Text>
            </View>
            

            <ScrollView horizontal={true}>
              <View style={styles.furtherScroll}>
                  {data[0].hourly.map(item=>{
                    date = new Date(item.dt * 1000);
                    // Hours part from the timestamp
                    hours = date.getHours();
                    // Minutes part from the timestamp
                    minutes = "0" + date.getMinutes();
                    formattedTime = hours + ':' + minutes.substr(-2)
                    icon = 'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@4x.png'

                    return (
                      <View style={styles.furtherForcast}>
                        <Image source={{uri:icon}} style = {{width:90,height:90}}/>
                        <Text style={styles.furtherForcastTime}>{formattedTime}</Text>
                        <Text style={{...styles.furtherForcastTime, padding:2}}>{`${item.weather[0].description}`}</Text>
                        <Text style={{...styles.furtherForcastTime, paddingBottom:2}}>Temp:29℃</Text>
                      </View>
                    )
                  })}
              </View>
            </ScrollView>
                
            <View style = {{...styles.greeting,paddingBottom:25}}>
                <Text style = {{...styles.greetingText, paddingTop:10}}>Upcoming</Text>
            </View>   
            
            {data[0].daily.map(item=>{
                    date = new Date(item.dt * 1000);
                    //get the day from timestamp
                    day = date.getDay()
                    temprature = item.temp.day-273.15
                    return (
                      <View style = {styles.upcomingItem}>
                            <Text style = {styles.upcomingDay}>{weekday[day]}</Text>
                            <View style = {styles.upcomingforecastDesc}>
                              <Text style = {styles.upcomingForecastText}>{item.weather[0].description}</Text>
                              <Text style={{...styles.upcomingForecastText, fontSize:12}}>{`Temp: ${temprature.toPrecision(4)}℃ Humidity: ${item.humidity}%`}</Text>
                            </View>
                      </View>  
            )
            })}
            

      </View>
  </ScrollView>
  )
}

export default HomeScreen;
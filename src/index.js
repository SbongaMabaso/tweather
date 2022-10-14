import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants'
import WeatherInfo from './WeatherInfo';

const API_KEY = '0c0b8e5b0a705599d659226168a39dac';

const Tweather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    //fetch weather data
    const fetchWeatherData = async (cityName) => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
            if(response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            }
            else {
                setWeatherData(null);
            }
            setLoaded(false);
        }
        catch(e) {
            Alert.alert('Error', e.message)
        }
    }

    useEffect(() => {
        fetchWeatherData('Durban');
    }, [])

    //Show loading message
    if(!loaded) {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.text}>loading...</Text> */}
                <ActivityIndicator size="large" color="red" />
            </View>
        )
    }


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Tweather</Text>
        </View>
        <WeatherInfo weatherData={weatherData} />
    </View>
  )
}

export default Tweather

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fcf5db',
      paddingTop: Constants.statusBarHeight
    },
    header: {
        alignItems: 'center',
        height: 80,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
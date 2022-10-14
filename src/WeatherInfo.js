import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const WeatherInfo = (weatherData) => {
    const {
        name,
        visibility,
        weather: [{icon, description}],
        main: {temp, humidity, feel_like},
        wind: {speed},
        sys: {sunrise, sunset},
    } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
        <View style={{alignItems:'center'}}>
            <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.logo}>
            <Text>{temp} °C</Text>
        </View>
    </SafeAreaView>
  )
}

export default WeatherInfo

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 15,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#e96e50',
        marginTop: 10,
    },
});
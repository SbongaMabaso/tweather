import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import SearchBar from './Search';

const WeatherInfo = ({weatherData, fetchWeatherData}) => {
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
        <SearchBar fetchWeatherData={fetchWeatherData} />

        <View style={{alignItems:'center'}}>
            <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.logo}>
            {/* Add your logo */}
            {/* <Text style={styles.tempInfo}>{temp} °C</Text> */}
        </View>
        <Text style={styles.tempInfo}>{temp} °C</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.extraInfo}>
            <View style={styles.info}>
                {/* Add image icon */}
                <Text style={styles.infoText}>{feel_like} °C</Text>
                <Text style={styles.infoText}>Feels Like</Text>
            </View>
            <View style={styles.info}>
                {/* Add image icon */}
                <Text style={styles.infoText}>{humidity} %</Text>
                <Text style={styles.infoText}>Humidity</Text>
            </View>
        </View>
        <View style={styles.extraInfo}>
            <View style={styles.info}>
                {/* Add image icon */}
                <Text style={styles.infoText}>{visibility}</Text>
                <Text style={styles.infoText}>Visibility</Text>
            </View>
            <View style={styles.info}>
                {/* Add image icon */}
                {/* <Image style={styles.smallIcon}
                    source={require('')} //image path
                /> */}
                <Text style={styles.infoText}>{speed} m/s</Text>
                <Text style={styles.infoText}>Wind Speed</Text>
            </View>
        </View>
        <View style={styles.extraInfo}>
            <View style={styles.info}>
                {/* Add image icon */}
                <Text style={styles.infoText}>{new Date(sunrise*1000).toLocaleString()}</Text>
                <Text style={styles.infoText}>Sunrise</Text>
            </View>
            <View style={styles.info}>
                {/* Add image icon */}
                {/* <Image style={styles.smallIcon}
                    source={require('../assets/sunset.png')} //image path
                /> */}
                <Text style={styles.infoText}>{new Date(sunset*1000).toLocaleString()}</Text>
                <Text style={styles.infoText}>Sunset</Text>
            </View>
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
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContext: 'space-around',
    },
    tempInfo: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 7,
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: '#d0eafa',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
    },
    infoText: {
        //
    }
});
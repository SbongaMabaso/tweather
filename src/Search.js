import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ fetchWeatherData }) => {
    const [cityName, setCityName] = useState('');

  return (
    <View style={styles.serachbar}>
      <TextInput
        placeholder='Search City'
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <EvilIcons
        name='search' size={28} color='black'
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    serachbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: Dimensions.get('screen').width -20,
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      backgroundColor: '#d0eafa',
    }
});
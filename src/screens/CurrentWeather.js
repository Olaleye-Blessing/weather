import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'

export default function CurrentWeather({ weatherData: { main, weather } }) {
  const { temp, feels_like, temp_min, temp_max } = main
  const [{ main: weatherCondition, description }] = weather
  const condition = weatherType[weatherCondition]

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        {
          backgroundColor: condition.backgroundColor
        }
      ]}
    >
      <View style={styles.container}>
        <Feather name={condition.icon} size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.feels}>Feels like {feels_like}</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: {temp_max}</Text>
          <Text style={styles.highLow}>Low: {temp_min}</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.message}>{condition.message}</Text>
      </View>
    </SafeAreaView>
  )
}

// when using flex 1, all components up the tree must have flex 1
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1, // fill the entire screen,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  bodyWrapper: {
    alignItems: 'center'
  },
  description: {
    fontSize: 28
  },
  message: {
    fontSize: 20
  }
})

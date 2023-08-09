import { StyleSheet, View } from 'react-native'
import CurrentWeather from './src/components/screens/CurrentWeather'
import UpcomingWeather from './src/components/screens/UpcomingWeather'
import City from './src/components/screens/City'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <UpcomingWeather /> */}
      <City />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

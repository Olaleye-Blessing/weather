import { StyleSheet, View } from 'react-native'
import CurrentWeather from './src/components/screens/CurrentWeather'
import UpcomingWeather from './src/components/screens/UpcomingWeather'

export default function App() {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

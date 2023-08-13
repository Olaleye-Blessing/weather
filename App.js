import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

export default function App() {
  const { loading, error, weather } = useGetWeather()

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    )

  if (error) {
    return (
      <View style={styles.container}>
        <ErrorItem message={error} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs weather={weather} />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

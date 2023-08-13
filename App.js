import { useEffect, useState } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { myLocation } from './src/utilities/myLocation'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      // Assume that location permission has been granted
      setLocation(myLocation)
    })()
  }, [])

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    )

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

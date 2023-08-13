import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { myLocation } from '../utilities/myLocation'

// TODO: Save the key in a .env file
const WEATHER_API_KEY = '14aa8d24793b41d1ffaa878c2ea55849'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState(null)

  const fetchWeatherData = async () => {
    if (!location) return

    const { latitude, longitude } = location.coords

    try {
      const req = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
      )
      
      if (!req.ok) {
        throw new Error('Something went wrong!')
      }

      const res = await req.json()
      setWeather(res)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      // Assume that location permission has been granted
      setLocation(myLocation)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      await fetchWeatherData()
    })()
  }, [location])

  return { loading, error, weather }
}

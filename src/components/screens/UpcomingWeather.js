import {
  // Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import ListItem from '../ListItem'

const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'clear'
      }
    ]
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'clouds'
      }
    ]
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'rain'
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <Image source={require('../../../assets/clouds.jpg')} style={styles.image} /> */}
      <ImageBackground
        source={require('../../../assets/clouds.jpg')}
        style={styles.image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          ListFooterComponent={
            <View>
              <Text>Footer</Text>
            </View>
          }
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    color: 'black',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather

import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

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

const Item = ({ dt_txt, max, min, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name="sun" size={15} color="black" />
      <Text>{dt_txt}</Text>
      <Text style={styles.temp}>{max}</Text>
      <Text style={styles.temp}>{min}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <Item
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    color: 'black',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'red'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  }
})

export default UpcomingWeather
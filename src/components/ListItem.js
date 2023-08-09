import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = ({ dt_txt, max, min, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name="sun" size={15} color="black" />
      <Text>{dt_txt}</Text>
      <Text style={styles.temp}>{max}</Text>
      <Text style={styles.temp}>{min}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default ListItem

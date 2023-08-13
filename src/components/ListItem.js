import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

const ListItem = ({ dt_txt, max, min, condition }) => {
  const type = weatherType[condition]

  return (
    <View style={styles.item}>
      <Feather name={type.icon || 'sun'} size={15} color="black" />
      <View style={styles.dateWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss')}</Text>
      </View>
      <Text style={styles.temp}>{`${Math.round(min)} / ${Math.round(
        max
      )}`}</Text>
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
  },
  dateWrapper: {
    flexDirection: 'column'
  }
})

export default ListItem

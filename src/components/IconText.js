import { StyleSheet, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = ({ iconName, iconColor, bodyText, bodyStyle }) => {
  return (
    <>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.text, bodyStyle]}>{bodyText}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold'
  }
})

export default IconText

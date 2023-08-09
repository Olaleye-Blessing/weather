import { StyleSheet, View } from 'react-native'
import IconText from './IconText'

const RowText = ({ containerStyle, icons }) => {
  return (
    <View style={[styles.rowWrapper, containerStyle]}>
      {icons.map((icon) => (
        <IconText
          bodyStyle={icon.style}
          iconName={icon.name}
          iconColor={icon.color}
          bodyText={icon.body}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  }
})

export default RowText

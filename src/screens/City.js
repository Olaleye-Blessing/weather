import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text
} from 'react-native'
import RowText from '../components/RowText'

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/sunset.jpg')}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityText, styles.cityName]}>London</Text>
        <Text style={[styles.cityText, styles.countryName]}>UK</Text>
        <RowText
          containerStyle={styles.populationWrapper}
          icons={[
            {
              name: 'user',
              color: 'red',
              body: '2,020,202',
              style: styles.populationText
            }
          ]}
        />
        <RowText
          containerStyle={styles.populationWrapper}
          icons={[
            {
              name: 'sunrise',
              color: 'white',
              body: '10:46:58',
              style: styles.riseSetText
            },
            {
              name: 'sunset',
              color: 'white',
              body: '17:28:15',
              style: styles.riseSetText
            }
          ]}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  populationWrapper: {
    justifyContent: 'center'
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around'
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  }
})

export default City

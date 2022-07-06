import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import Custombutton from '../components/Custombutton'
import { useNavigation } from '@react-navigation/native'

const HomePage = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image source={require('../assets/LogoHome.png')} style={styles.image} />
      <View style={styles.groupButton}>
        <Custombutton
          color="crimson"
          text="Se connecter"
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate('Connect')}
        />
        <Custombutton
          color="crimson"
          text="S'inscrire"
          icon="account-plus-outline"
          mode="contained"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '80%',
    height: '40%',
  },
  groupButton: {
    flex: 1,
  },
})

import { View, StyleSheet, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Custombutton from '../components/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { setDisabled } from 'react-native/Libraries/LogBox/Data/LogBoxData'

const ConnectPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [errors, setErrors] = useState({})
  const [disabled, setDisabled] = useState(true)
  const navigation = useNavigation()

  const checkMail = () => {
    let regexMail = new RegExp(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/)
    if (!email) {
      setErrors({ ...errors, email: "L'email doit être renseigné" })
      setDisabled(true)
    } else {
      if (!email.match(regexMail)) {
        setErrors({ ...errors, email: "L'email est invalide" })
        setDisabled(true)
      } else {
        setErrors({ ...errors, email: '' })
        setDisabled(false)
      }
    }
  }

  const checkPass = () => {
    if (!password) {
      setErrors({ ...errors, password: 'Le mot de passe doit être renseigné' })
      setDisabled(true)
    } else {
      setErrors({ ...errors, password: '' })
      setDisabled(false)
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ConnectLogo.png')}
        style={styles.image}
      />
      <View style={styles.groupInput}>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onBlur={() => checkMail()}
          onFocus={() => checkMail()}
        />
        <Text style={styles.error}>{errors?.email}</Text>
        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={showPassword}
          onBlur={() => checkPass()}
          onFocus={() => checkPass()}
          right={
            <TextInput.Icon
              name={showPassword ? 'eye' : 'eye-off'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Text style={styles.error}>{errors?.password}</Text>
        <Custombutton
          disabled={disabled}
          color="blue"
          text="Se connecter"
          icon=""
          mode="contained"
          onPress={() => navigation.navigate('Success')}
        />
        <Text style={styles.noAccount}>
          Pas encore inscrit ?{' '}
          <Text
            style={styles.create}
            onPress={() => navigation.navigate('Register')}
          >
            Créer un compte
          </Text>
        </Text>
      </View>
    </View>
  )
}

export default ConnectPage

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupInput: {
    flex: 1,
    width: '80%',
  },
  noAccount: {
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'none',
  },
  create: {
    color: 'blue',
  },
  error: {
    color: 'crimson',
  },
})

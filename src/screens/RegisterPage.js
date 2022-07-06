import { View, StyleSheet, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Custombutton from '../components/Custombutton'
import { useNavigation } from '@react-navigation/native'

const RegisterPage = () => {
  const [email, setEmail] = useState('nico.personne@gmail.com')
  const [password, setPassword] = useState('Test1234@')
  const [confirmPass, setConfirmPass] = useState('Test1234@')
  const [showPassword, setShowPassword] = useState(true)
  const [showConfirmPass, setShowConfirmPass] = useState(true)
  const [errors, setErrors] = useState([])
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
    let regexMail = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    )
    if (!password) {
      setErrors({
        ...errors,
        password: 'Le mot de passe doit être renseigné',
      })
      setDisabled(true)
    } else {
      if (!password.match(regexMail)) {
        setErrors({
          ...errors,
          password:
            'Le mot de passe doit contenir au moins 1 majuscule, 1 chiffre, 1 caractère spécial et 8 caractères',
        })
        setDisabled(true)
      } else {
        setErrors({ ...errors, password: '' })
        setDisabled(false)
      }
    }
  }
  const checkConfirmPass = () => {
    if (!confirmPass) {
      setErrors({
        ...errors,
        confirmPass: 'La confirmation du mot de passe doit être renseigné',
      })
      setDisabled(true)
    } else {
      if (!(confirmPass === password)) {
        setErrors({
          ...errors,
          confirmPass: 'Les mots de passe ne sont pas similaire',
        })
        setDisabled(true)
      } else {
        setErrors({ ...errors, confirmPass: '' })
        setDisabled(false)
      }
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
        <TextInput
          style={styles.input}
          label="Confirmation du mot de passe"
          value={confirmPass}
          onChangeText={(text) => setConfirmPass(text)}
          secureTextEntry={showConfirmPass}
          onBlur={() => checkConfirmPass()}
          onFocus={() => checkConfirmPass()}
          right={
            <TextInput.Icon
              name={showConfirmPass ? 'eye' : 'eye-off'}
              onPress={() => setShowConfirmPass(!showConfirmPass)}
            />
          }
        />
        <Text style={styles.error}>{errors?.confirmPass}</Text>
        <Custombutton
          disabled={disabled}
          color="blue"
          text="Suivant"
          icon="arrow-right"
          mode="contained"
          onPress={() =>
            navigation.navigate('RegisterStep2', {
              email: email,
              password: password,
            })
          }
        />
      </View>
    </View>
  )
}

export default RegisterPage
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

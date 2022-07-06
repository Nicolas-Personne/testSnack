import { View, StyleSheet, Image, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-paper'
import Custombutton from '../components/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'

const RegisterStep2 = (props) => {
  const { route } = props
  const { email, password } = route
  const [civility, setCivility] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthDate, setBirthDate] = useState(new Date())
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState([])
  const [dateTimeShow, setDateTimeShow] = useState(false)
  const civilityArray = ['madame', 'monsieur']
  const checkCivility = (value) => {
    if (!value) {
      setErrors({ ...errors, civility: 'La civilité doit être renseigné' })
      setDisabled(true)
    } else {
      if (!civilityArray.includes(value)) {
        setErrors({ ...errors, civility: "La civilité n'est pas valide" })
        setDisabled(true)
      } else {
        setErrors({ ...errors, civility: '' })
        setDisabled(false)
      }
    }
    setCivility(value)
  }

  const checkLastname = () => {
    let regexName = new RegExp(
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    )
    if (!lastname) {
      setErrors({ ...errors, lastname: 'Le nom doit être renseigné' })
      setDisabled(true)
    } else {
      if (!lastname.match(regexName)) {
        setErrors({ ...errors, lastname: 'Le nom est invalide' })
        setDisabled(true)
      } else {
        setErrors({ ...errors, lastname: '' })
        setDisabled(false)
      }
    }
  }

  const checkFirstname = () => {
    let regexName = new RegExp(
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    )
    if (!firstname) {
      setErrors({ ...errors, firstname: 'Le prénom doit être renseigné' })
      setDisabled(true)
    } else {
      if (!firstname.match(regexName)) {
        setErrors({ ...errors, firstname: 'Le prénom est invalide' })
        setDisabled(true)
      } else {
        setErrors({ ...errors, firstname: '' })
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
        <Picker
          selectedValue={civility}
          onValueChange={(itemValue, itemIndex) => {
            checkCivility(itemValue)
          }}
        >
          <Picker.Item label="Civilité" value="" />
          <Picker.Item label="Madame" value="madame" />
          <Picker.Item label="Monsieur" value="monsieur" />
        </Picker>
        <Text style={styles.error}>{errors?.civility}</Text>

        <TextInput
          style={styles.input}
          label="Nom"
          value={lastname}
          onChangeText={(text) => setLastname(text)}
          onBlur={() => checkLastname()}
          onFocus={() => checkLastname()}
        />
        <Text style={styles.error}>{errors?.lastname}</Text>

        <TextInput
          style={styles.input}
          label="Prénom"
          value={firstname}
          onChangeText={(text) => setFirstname(text)}
          onBlur={() => checkFirstname()}
          onFocus={() => checkFirstname()}
        />
        <Text style={styles.error}>{errors?.firstname}</Text>

        <TextInput
          style={styles.input}
          label="Date de naissance"
          value={dayjs(birthDate).format('DD/MM/YYYY')}
          onChangeText={() => {}}
          onBlur={() => {}}
          onFocus={() => {
            setDateTimeShow(true)
          }}
        />
        {dateTimeShow && (
          <DateTimePicker
            mode="date"
            value={new Date()}
            is24Hour={true}
            onChange={(event, date) => {
              setDateTimeShow(false)
              setBirthDate(date)
            }}
          />
        )}

        <Custombutton
          disabled={disabled}
          color="blue"
          text="Suivant"
          icon="arrow-right"
          mode="contained"
          onPress={() => {}}
        />
      </View>
    </View>
  )
}
export default RegisterStep2

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

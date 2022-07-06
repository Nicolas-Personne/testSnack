import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Custombutton = (props) => {
  const { icon, mode, color, text, onPress, disabled } = props
  return (
    <Button
      disabled={disabled}
      style={styles.button}
      icon={icon}
      mode={mode}
      onPress={onPress}
      color={color}
    >
      {text}
    </Button>
  )
}

export default Custombutton

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginVertical: 10,
  },
})

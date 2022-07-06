import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import HomeNavigation from './src/navigation/HomeNavigation'

export default function App() {
  return (
    <View style={styles.container}>
      <HomeNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

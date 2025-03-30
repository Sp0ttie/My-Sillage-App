import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import ARScreen from "./components/ARScreen"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ARScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3efe9",
  },
})


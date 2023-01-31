import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import Divider from "./Divider"
import UseContext from "./UseContext/UseContext"
import UseEffect from "./UseEffect/UseEffect"
import UseRef from "./UseRef"
import UseState from "./UseState"
import { ThemeContext } from "./UseContext/ThemeContext"
import { UserContext } from "./UseContext/UserContext"
import UseMemo from "./UseMemo"
import UseCallback from "./UseCallback"
import UseReducer from "./UseReducer"

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const [userName, setUserName] = useState("사용자")

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <UseState />
          <Divider />
          <UseEffect />
          <Divider />
          <UseRef />
          <Divider />
          <UserContext.Provider value={{ userName, setUserName }}>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
              <UseContext />
            </ThemeContext.Provider>
          </UserContext.Provider>
          <Divider />
          <UseMemo />
          <Divider />
          <UseCallback />
          <Divider />
          <UseReducer />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

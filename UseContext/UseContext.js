import { useContext, useState } from "react"
import { Text, TouchableOpacity, View, TextInput, Button } from "react-native"
import { ThemeContext } from "./ThemeContext"
import { UserContext } from "./UserContext"

export default () => {
  return (
    <View style={{ width: "100%", height: 700 }}>
      <Text
        style={{
          alignSelf: "baseline",
          marginLeft: 16,
          marginBottom: 16,
          fontSize: 18,
        }}
      >
        [useContext]
      </Text>
      <Header />
      <Content />
      <Footer />
    </View>
  )
}

const Header = () => {
  const { isDark } = useContext(ThemeContext)
  const { userName } = useContext(UserContext)

  return (
    <View
      style={{
        backgroundColor: isDark ? "black" : "lightgrey",
        alignItems: "center",
        justifyContent: "center",
        height: 54,
        borderBottomColor: isDark ? "white" : "black",
        borderBottomWidth: 0.4,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: isDark ? "white" : "black",
        }}
      >
        Welcome, {userName}!
      </Text>
    </View>
  )
}
const Content = () => {
  const { isDark } = useContext(ThemeContext)
  const { userName } = useContext(UserContext)

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <Text style={{ color: isDark ? "white" : "black" }}>
        {userName}님, 좋은 하루 되세요
      </Text>
    </View>
  )
}
const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)
  const [input, setInput] = useState("")
  const { setUserName } = useContext(UserContext)

  return (
    <View
      style={{
        height: 54,
        alignItems: "flex-end",
        justifyContent: "center",
        borderTopColor: isDark ? "white" : "black",
        borderTopWidth: 0.4,
        backgroundColor: isDark ? "black" : "white",
        flexDirection: "row",
      }}
    >
      <TextInput
        value={input}
        onChangeText={(t) => setInput(t)}
        placeholder="이름을 입력하세요..."
      />
      <Button
        title="Change"
        onPress={() => {
          setUserName(input)
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setIsDark(!isDark)
        }}
        style={{
          backgroundColor: isDark ? "black" : "white",
          padding: 10,
          marginRight: 16,
          borderRadius: 12,
          borderColor: isDark ? "white" : "black",
          borderWidth: 0.4,
        }}
      >
        <Text
          style={{
            color: isDark ? "white" : "black",
          }}
        >
          다크모드 {isDark ? "Off" : "On"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

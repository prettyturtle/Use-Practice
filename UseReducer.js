import { useState, useReducer } from "react"
import { StyleSheet, View, Text, Button, TextInput } from "react-native"

const UseReducer = () => {
  const [number, setNumber] = useState(0)
  const [money, dispatch] = useReducer(reducer, 0)

  return (
    <View style={{ alignItems: "center", width: "100%", marginBottom: 100 }}>
      <Text
        style={{
          alignSelf: "baseline",
          marginLeft: 16,
          marginBottom: 16,
          fontSize: 18,
        }}
      >
        [useReducer]
      </Text>
      <Text>useReducer은행에 오신 것을 환영합니다</Text>
      <Text>잔고 : ? 원</Text>
      <TextInput
        value={number.toString()}
        onChangeText={(t) => setNumber(Number(t))}
        style={{
          borderRadius: 12,
          height: 48,
          width: "90%",
          marginHorizontal: 16,
          flex: 1,
          borderColor: "lightgrey",
          borderWidth: 0.4,
          fontSize: 16,
          paddingHorizontal: 8,
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <Button
          title="예금"
          onPress={() => {}}
        />
        <Button
          title="출금"
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

export default UseReducer

import { useState, useReducer } from "react"
import { StyleSheet, View, Text, Button, TextInput } from "react-native"

// reducer  : state를 업데이트 하는 역할
// dispatch : state 업데이트를 위한 요구
// action   : 요구의 내용

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
}

const reducer = (state, action) => {
  console.log("reducer가 호출됨", state, action)

  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload
    case ACTION_TYPES.withdraw:
      return state - action.payload
    default:
      return state
  }
}

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
      <Text>잔고 : {money} 원</Text>
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
          onPress={() => {
            dispatch({
              type: ACTION_TYPES.deposit,
              payload: number,
            })
          }}
        />
        <Button
          title="출금"
          onPress={() => {
            dispatch({
              type: ACTION_TYPES.withdraw,
              payload: number,
            })
          }}
        />
      </View>
    </View>
  )
}

export default UseReducer

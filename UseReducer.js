import { useState, useReducer } from "react"
import { StyleSheet, View, Text, Button, TextInput } from "react-native"
import Divider from "./Divider"

// reducer  : state를 업데이트 하는 역할
// dispatch : state 업데이트를 위한 요구
// action   : 요구의 내용

// ============== (1) ==============
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

// ============== (2) ==============
const NAME_LIST_ACTION_TYPES = {
  add: "add",
  check: "check",
  delete: "delete",
}

const nameListReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case NAME_LIST_ACTION_TYPES.add:
      if (state.filter((user) => action.user.name === user.name).length === 0) {
        return state.concat([action.user])
      }
      return state
    case NAME_LIST_ACTION_TYPES.check:
      return state.map((item, _) => {
        if (item.name === action.user.name) {
          return {
            ...item,
            isCheck: !item.isCheck,
          }
        }
        return { ...item }
      })
    case NAME_LIST_ACTION_TYPES.delete:
      return state.filter((user) => user.name !== action.user.name)
    default:
      return state
  }
}

const UseReducer = () => {
  // ============== (1) ==============
  const [number, setNumber] = useState(0)
  const [money, dispatch] = useReducer(reducer, 0)

  // ============== (2) ==============
  const [input, setInput] = useState("")
  const [nameList, nameListDispatch] = useReducer(nameListReducer, [])

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
      {/* ============== (1) ============== */}
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

      {/* ============== (2) ============== */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <TextInput
            value={input}
            placeholder="이름을 입력하세요..."
            onChangeText={setInput}
            style={{
              borderRadius: 12,
              height: 48,
              marginHorizontal: 16,
              flex: 1,
              borderColor: "lightgrey",
              borderWidth: 0.4,
              fontSize: 16,
              paddingHorizontal: 8,
            }}
          />
          <Button
            title="등록"
            onPress={() => {
              nameListDispatch({
                type: NAME_LIST_ACTION_TYPES.add,
                user: {
                  name: input,
                  isCheck: false,
                },
              })
            }}
          />
        </View>
        <View>
          {nameList.map((item, index) => {
            return (
              <>
                <Text>{index}번째</Text>
                <Button
                  color={item.isCheck ? "blue" : "black"}
                  title={item.name}
                  onPress={() => {
                    nameListDispatch({
                      type: NAME_LIST_ACTION_TYPES.check,
                      user: item,
                    })
                  }}
                />
                <Button
                  title="삭제"
                  onPress={() => {
                    nameListDispatch({
                      type: NAME_LIST_ACTION_TYPES.delete,
                      user: item,
                    })
                  }}
                />
                <Divider />
              </>
            )
          })}
        </View>
      </View>
    </View>
  )
}

export default UseReducer

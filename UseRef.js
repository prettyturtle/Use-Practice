import { useEffect, useRef, useState } from "react"
import { StyleSheet, View, Text, Button, TextInput } from "react-native"

export default () => {
  // ============== (1) ==============
  const [count, setCount] = useState(1)
  const countRef = useRef(1)

  const didTapCountStateUpButton = () => {
    setCount(count + 1)
  }

  const didTapCountRefUpButton = () => {
    countRef.current += 1
    console.log(countRef.current)
  }

  // ============== (2) ==============
  const countRef2 = useRef(1)
  let countLet = 1

  const didTapCountRef2UpButton = () => {
    countRef2.current += 1
    console.log(countRef2.current)
  }

  const didTapCountLetUpButton = () => {
    countLet += 1
    console.log(countLet)
  }

  // ============== (3) ==============
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const didTapAlertButton = () => {
    inputRef.current.clear()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleLabel}>[useRef]</Text>
      {/* ============== (1) ============== */}
      <Text>State : {count}</Text>
      <Text>Ref : {countRef.current}</Text>
      <Button
        title="State 올려"
        onPress={didTapCountStateUpButton}
      />
      <Button
        title="Ref 올려"
        onPress={didTapCountRefUpButton}
      />

      {/* ============== (2) ============== */}
      <Text>Ref : {countRef2.current}</Text>
      <Text>let : {countLet}</Text>
      <Button
        title="Ref2 올려"
        onPress={didTapCountRef2UpButton}
      />
      <Button
        title="let 올려"
        onPress={didTapCountLetUpButton}
      />

      {/* ============== (3) ============== */}
      <View style={styles.textInputContainer}>
        <TextInput
          ref={inputRef}
          placeholder="이름을 입력하세요..."
          // value={inputText}
          // onChangeText={didChangeInputText}
          style={styles.textInput}
        />
        <View style={styles.uploadButtonContainer}>
          <Button
            title="Alert"
            onPress={didTapAlertButton}
            color="white"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  titleLabel: {
    alignSelf: "baseline",
    marginLeft: 16,
    marginBottom: 16,
    fontSize: 18,
  },
  textInputContainer: {
    marginTop: 16,
    width: "100%",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    borderRadius: 12,
    height: "100%",
    marginHorizontal: 16,
    flex: 1,
    borderColor: "lightgrey",
    borderWidth: 0.4,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  uploadButtonContainer: {
    backgroundColor: "pink",
    marginRight: 16,
    borderRadius: 12.0,
  },
})

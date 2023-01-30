import { useCallback } from "react"
import { useState, useEffect } from "react"
import { StyleSheet, View, Text, Button, TextInput, Switch } from "react-native"

export default () => {
  // ============== (1) ==============
  const [number, setNumber] = useState(0)
  const [toggle, setToggle] = useState(true)
  const didTapPrintButton = useCallback(() => {
    console.log(`NUMBER : ${number}`)
  }, [number])

  useEffect(() => {
    console.log("didTapPrintButton이 변경되었습니다.")
  }, [didTapPrintButton])

  // ============== (2) ==============
  const [size, setSize] = useState(100)
  const [isDark, setIsDark] = useState(false)
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: size,
      height: size,
    }
  }, [size])

  return (
    <View style={styles.container}>
      <Text style={styles.titleLabel}>[useCallback]</Text>
      {/* ============== (1) ============== */}
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="숫자를 입력하세요..."
          value={String(number)}
          onChangeText={(t) => setNumber(Number(t))}
          style={styles.textInput}
        />
        <View style={styles.uploadButtonContainer}>
          <Button
            title="Print"
            onPress={didTapPrintButton}
            color="white"
          />
        </View>
        <Switch
          value={toggle}
          onChange={() => setToggle(!toggle)}
        />
      </View>
      {/* ============== (2) ============== */}
      <View
        style={{
          backgroundColor: isDark ? "black" : "white",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button
          title="+"
          onPress={() => {
            setSize(size + 3)
          }}
        />
        <Text style={{ color: !isDark ? "black" : "white" }}>{size}</Text>
        <Button
          title="-"
          onPress={() => {
            setSize(size - 3)
          }}
        />
      </View>
      <Button
        title="DARK"
        onPress={() => {
          setIsDark(!isDark)
        }}
      />
      <Box createBoxStyle={createBoxStyle} />
    </View>
  )
}

const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({})

  useEffect(() => {
    console.log("박스 키우기")
    setStyle(createBoxStyle())
  }, [createBoxStyle])
  return <View style={{ ...style, marginBottom: 100 }} />
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

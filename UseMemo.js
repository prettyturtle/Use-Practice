import { useMemo, useState } from "react"
import { StyleSheet, View, Text, TextInput } from "react-native"

const hardCalculate = (number) => {
  console.log("어려운 계산")
  for (let i = 0; i < 999999999; i++) {}
  return number + 10000
}
const easyCalculate = (number) => {
  console.log("쉬운 계산")
  return number + 1
}

export default () => {
  // ============== (1) ==============
  const [hardNumber, setHardNumber] = useState(1)
  const [easyNumber, setEasyNumber] = useState(1)
  // const hardSum = hardCalculate(hardNumber)
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber)
  }, [hardNumber])
  const easySum = easyCalculate(easyNumber)

  return (
    <View style={styles.container}>
      <Text style={styles.titleLabel}>[useMemo]</Text>
      <Text style={{ fontSize: 18 }}>어려운 계산기</Text>
      <View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="숫자를 입력하세요..."
            value={hardNumber}
            onChangeText={(t) => setHardNumber(parseInt(t))}
            style={styles.textInput}
          />
        </View>
      </View>
      <Text style={{ fontSize: 18 }}>+ 10000 = {hardSum}</Text>
      <View style={{ height: 32, width: "100%" }} />
      <Text style={{ fontSize: 18 }}>쉬운 계산기</Text>
      <View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="숫자를 입력하세요..."
            value={easyNumber}
            onChangeText={(t) => setEasyNumber(parseInt(t))}
            style={styles.textInput}
          />
        </View>
      </View>
      <Text style={{ fontSize: 18 }}>+ 1 = {easySum}</Text>
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

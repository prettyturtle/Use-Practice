import { useRef, useState } from "react"
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  titleLabel: {
    alignSelf: "baseline",
    marginLeft: 16,
    marginBottom: 16,
    fontSize: 18
  }
})
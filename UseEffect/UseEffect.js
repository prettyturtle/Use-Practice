import { useEffect, useState } from "react"
import { StyleSheet, View, Text, Button, TextInput } from "react-native"
import Timer from "./Timer"

export default () => {

  // ============== (1) ==============
  const [time, setTime] = useState(1)
  const [backgroundColor, setBackgroundColor] = useState("white")
  const didTapTimeUpdateButton = () => {
    setTime(time + 1)
  }

  useEffect(() => {
    console.log("π μ΄ μ»΄ν¬λνΈκ° λ λλ§ λ  λλ§λ€ νΈμΆλ©λλ€.")
  })
  useEffect(() => {
    console.log("π‘ μ΄ μ»΄ν¬λνΈκ° μ²« λ λλ§ λ  λ νΈμΆλ©λλ€.")
  }, [])
  useEffect(() => {
    const colors = ["lightblue", "yellow", "orange", "cyan"]
    setBackgroundColor(colors[Math.floor(Math.random() * colors.length)])
  }, [time])

  // ============== (2) ==============
  const [showTimer, setShowTimer] = useState(false)
  const didTapShowTimerButton = () => setShowTimer(!showTimer)

  return (
    <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
      <Text style={styles.titleLabel}>[useEffect]</Text>
      {/* ============== (1) ============== */}
      <Text>νμ¬ μκ° : {time}μ</Text>
      <Button
        title="Update"
        onPress={didTapTimeUpdateButton}
      />

      {/* ============== (2) ============== */}
      {showTimer && <Timer />}
      <View style={styles.uploadButtonContainer}>
        <Button
          title="Show Timer"
          onPress={didTapShowTimerButton}
          color="white"
        />
      </View>
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
  },
  uploadButtonContainer: {
    backgroundColor: "pink",
    borderRadius: 12.0
  }
})
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
    console.log("🎉 이 컴포넌트가 렌더링 될 때마다 호출됩니다.")
  })
  useEffect(() => {
    console.log("💡 이 컴포넌트가 첫 렌더링 될 때 호출됩니다.")
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
      <Text>현재 시각 : {time}시</Text>
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
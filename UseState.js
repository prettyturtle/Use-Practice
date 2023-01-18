import { useState } from "react"
import { StyleSheet, View, Text, Button, TextInput } from "react-native"

export default () => {

  // ============== (1) ==============
  const [time, setTime] = useState(1)

  const didTapTimeUpdateButton = () => {
    setTime(time + 1)
  }

  // ============== (2) ==============
  const [inputText, setInputText] = useState("")
  const [names, setNames] = useState([])

  const didChangeInputText = (input) => {
    setInputText(input)
  }

  const didTapUploadButton = (e) => {
    if (inputText === "") { return }
    setNames([...names, inputText])
    setInputText("")
  }

  return (
    <View style={styles.container}>
      {/* ============== (1) ============== */}
      <Text>현재 시각 : {time}시</Text>
      <Button
        title="Update"
        onPress={didTapTimeUpdateButton}
      />

      {/* ============== (2) ============== */}
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="이름을 입력하세요..."
          value={inputText}
          onChangeText={didChangeInputText}
          style={styles.textInput}
        />
        <View style={styles.uploadButtonContainer}>
          <Button
            title="Upload"
            onPress={didTapUploadButton}
            color="white"
          />
        </View>
      </View>
        {names.map((name, index) => (
          <Text key={`${name}-${index}`}>{name}</Text>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  textInputContainer: {
    marginTop: 16,
    width: "100%",
    height: 48,
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    borderRadius: 12,
    height: "100%",
    marginHorizontal: 16,
    flex: 1,
    borderColor: "lightgrey",
    borderWidth: 0.4,
    fontSize: 16,
    paddingHorizontal: 8
  },
  uploadButtonContainer: {
    backgroundColor: "pink",
    marginRight: 16,
    borderRadius: 12.0
  }
})
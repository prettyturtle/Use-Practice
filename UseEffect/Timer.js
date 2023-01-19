import { useState, useEffect } from "react"
import { View, Text } from "react-native"

// ============== (2) ==============
export default () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌고 있는 중...")
    }, 100)
    return () => {
      console.log("타이머 종료!")
      clearInterval(timer)
    }
  }, [])

  return (
    <View>
      <Text>타이머 시작! 콘솔창을 보세요.</Text>
    </View>
  )
}
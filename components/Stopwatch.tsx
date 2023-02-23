import { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import tw from '/lib/tailwind'

export default function Stopwatch() {
  const [trackStopwatch, setTrackStopwatch] = useState(0)

  return (
    <View>
      <Text>Timer</Text>
      <Pressable>Test</Pressable>
    </View>
  )
}

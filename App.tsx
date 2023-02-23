import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import tw from 'twrnc'

export default function App() {
  return (
    <View style={tw`container flex flex-col text-lg bg-zinc-300`}>
      <Text>Hello, world!</Text>
      <StatusBar style='auto' />
    </View>
  )
}

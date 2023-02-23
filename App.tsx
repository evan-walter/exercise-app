import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import Stopwatch from './components/Stopwatch'
import tw from '/lib/tailwind'
import { useDeviceContext } from 'twrnc'

export default function App() {
  useDeviceContext(tw)
  return (
    <View
      style={tw`container flex flex-col min-h-full text-lg text-black dark:bg-zinc-900 dark:text-white`}
    >
      <Text>Exercise App</Text>
      <StatusBar style='auto' />
    </View>
  )
}

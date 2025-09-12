import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Index() {
  return (
    <View className="bg-slate-500 flex justify-center items-center h-screen">
      <Text className="text-xl font-bold text-white" >Hello World</Text>
      <Link href="/home" className="mt-4 pt-4">
        <Button title="Ir para Home" />
      </Link>
    </View>
  )
}
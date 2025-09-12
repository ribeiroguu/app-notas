import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';


export default function Home() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-lg font-bold">Home</Text>
            <Link href="/" className="mt-4 pt-4">
                <Button title="Ir para Index" />
            </Link>
        </View>
    )
}
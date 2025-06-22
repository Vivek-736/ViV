import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-black-100'>
      <Text className='text-white'>Hello World!</Text>
      <Link href={'/home'} className='text-white mt-4 text-4xl'>Home</Link>
    </View>
  );
}

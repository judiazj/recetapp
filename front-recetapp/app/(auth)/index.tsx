import { FoodLogo } from '@/components';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center bg-cyan-500">
      <FoodLogo size={200} />
      <Text className="text-center text-2xl text-cyan-900 font-bold">RECETAPP</Text>
      <View className="w-48 h-1 mx-auto my-2 bg-white border-0"></View>
      <Text className="text-center text-1xl text-cyan-900 mb-32">SAZÓN SALUDABLE</Text>
      <Text className="text-center text-white mb-10">La cocina es un viaje donde cada receta es una nueva aventura por explorar.</Text>
      <Link href={"/login"} asChild className="flex justify-center mb-3">
        <TouchableOpacity className="bg-cyan-950 py-2 px-16 rounded-lg flex justify-center items-center mx-auto">
          <Text className="text-white items-center">Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/register" className="mx-auto">
        <Text className="text-center text-white mb-auto">Create New Account</Text>
      </Link>
    </View>
  );
}

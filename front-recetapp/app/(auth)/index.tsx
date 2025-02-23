import { FoodLogo } from '@/components';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center bg-cyan-500">
      <FoodLogo size={200} mt="mt-24" />
      <Text className="text-center text-4xl text-cyan-900 font-bold">RECETAPP</Text>
      <View className="w-72 h-1 mx-auto my-2 bg-white border-0"></View>
      <Text className="text-center text-3xl text-cyan-900 mb-32">SAZÓN SALUDABLE</Text>
      <Text className="text-center text-2xl text-white mb-10 font-semibold">La cocina es un viaje donde cada receta es una nueva aventura por explorar.</Text>
      <Link href={"/login"} asChild className="flex justify-center mb-5">
        <TouchableOpacity className="bg-cyan-900 py-4 px-24 rounded-2xl flex justify-center items-center mx-auto">
          <Text className="text-white items-center text-2xl">Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/register" className="mx-auto">
        <Text className="text-center text-white mb-auto text-2xl underline">Create New Account</Text>
      </Link>
    </View>
  );
}

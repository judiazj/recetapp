import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Link, router } from 'expo-router';
import { Button, FoodLogo, InputPassword, InputText } from '@/components';
import { axiosInstance } from '@/utils/axios/axiosInstance';
import { AUTH_LOGIN } from '@/constants';
import { invalidEmailMessage, validateEmail } from '@/utils/emailValidator';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    if (validateEmail(email) === false) {
      Alert.alert('Error', invalidEmailMessage);
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post(AUTH_LOGIN, {
        email,
        password,
      })


      if (response.status !== 201) {
        Alert.alert('Error', 'Credenciales incorrectas.');
        return;
      }

      router.replace('/preferences');

      // TODO: Save token in AsyncStorage or SecureStore
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión.');
    } finally {
      setLoading(false);
    }
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 justify-between bg-cyan-500"
    >
      <View>
        <FoodLogo size={150} mt="mt-16" />

        <Text className="text-center text-4xl text-cyan-900 font-bold">LOGIN</Text>
      </View>

      <View className="mx-auto w-5/6">
        <Text className="text-white mb-2 text-3xl font-bold">Email address</Text>
        <InputText
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
      </View>


      <View className="mx-auto w-5/6">
        <Text className="text-white mb-2 text-3xl font-bold">Password</Text>
        <InputPassword
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoComplete="password"
        />
      </View>

      <View className="mb-5">
        <Button
          mb="mb-2"
          text="Login"
          loading={loading}
          onPress={handleLogin}
        />

        <Link href="/forgot-password" className="mx-auto">
          <Text className="text-center text-2xl mb-5 underline text-cyan-900">¿Olvidaste tu contraseña?</Text>
        </Link>
      </View>

    </KeyboardAvoidingView>
  );
}

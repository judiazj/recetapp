import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Link, router } from 'expo-router';
import { Button, FoodLogo, InputPassword, InputText } from '@/components';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setError('');

      // TODO: Replace with your login endpoint
      // const response = await fetch('YOUR_LOGIN_ENDPOINT', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });

      // const data = await response.json();

      // if (response.ok) {
      //   // TODO: Store the token/user data
      //   // await SecureStore.setItemAsync('userToken', data.token);
      router.replace('/(tabs)');
      // } else {
      //   setError(data.message || 'Login failed');
      // }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 justify-between bg-cyan-500"
    >
      <View>
        <FoodLogo size={150} mt="mt-16" />
        {error ? <Text >{error}</Text> : null}

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
          onPress={() => { }}
        />

        <Link href="/forgot-password" className="mx-auto">
          <Text className="text-center text-2xl mb-5 underline text-cyan-900">¿Olvidaste tu contraseña?</Text>
        </Link>
      </View>

    </KeyboardAvoidingView>
  );
}

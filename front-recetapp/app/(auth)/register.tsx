import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Link, router } from 'expo-router';
import { Button, FoodLogo, InputPassword, InputText } from '@/components';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      setError('');

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      // TODO: Replace with your registration endpoint
      // const response = await fetch('YOUR_REGISTER_ENDPOINT', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ name, email, password }),
      // });

      // const data = await response.json();

      // if (response.ok) {
      //   // TODO: Store the token/user data
      //   // await SecureStore.setItemAsync('userToken', data.token);
      //   router.replace('/(tabs)');
      // } else {
      //   setError(data.message || 'Registration failed');
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

        <Text className="text-center text-4xl text-cyan-900 font-bold">CREATE ACCOUNT</Text>
      </View>

      <View className="mx-auto w-5/6">
        <Text className="text-white mb-2 text-3xl font-bold">NAME</Text>
        <InputText
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          keyboardType="default"
          autoCapitalize="words"
          autoComplete="name"
        />
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
          text="Create"
          onPress={() => { }}
        />
      </View>

    </KeyboardAvoidingView>
  );
}

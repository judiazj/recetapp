import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Link } from 'expo-router';
import { Button, FoodLogo, InputPassword, InputText } from '@/components';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    try {
      setError('');
      setSuccess(false);

      // TODO: Replace with your password reset endpoint
      // const response = await fetch('YOUR_PASSWORD_RESET_ENDPOINT', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email }),
      // });

      // const data = await response.json();

      // if (response.ok) {
      //   setSuccess(true);
      // } else {
      //   setError(data.message || 'Password reset request failed');
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

        <Text className="text-center text-4xl text-cyan-900 font-bold">PASSWORD RESET</Text>
      </View>

      <View className="mx-auto w-5/6">
        <Text className="text-white mb-2 text-3xl font-bold">Email address</Text>
        <InputText
          breakWords
          placeholder="Enter the email address associated with your account"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
      </View>

      <View className="mb-5">
        <Button
          mb="mb-2"
          text="Send"
          onPress={() => { }}
        />
      </View>

    </KeyboardAvoidingView>
  );
}

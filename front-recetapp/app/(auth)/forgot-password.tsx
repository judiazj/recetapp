import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Button, FoodLogo, InputText } from '@/components';
import { invalidEmailMessage, validateEmail } from '@/utils/emailValidator';
import { axiosInstance } from '@/utils/axios/axiosInstance';
import { AUTH_FORGOT_PASSWORD } from '@/constants';
import { router } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);


  const handleResetPassword = async () => {
    if (validateEmail(email) === false) {
      Alert.alert('Error', invalidEmailMessage);
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post(AUTH_FORGOT_PASSWORD, {
        email,
      });

      if (response.status !== 201) {
        Alert.alert('Error', 'Ocurrió un error al intentar restablecer la contraseña.');
        return;
      }

      Alert.alert('Success', 'Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña.');
      router.replace('../login');
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al intentar restablecer la contraseña.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 justify-between bg-cyan-500"
    >
      <View>
        <FoodLogo size={150} mt="mt-16" />

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
          loading={loading}
          onPress={handleResetPassword}
        />
      </View>

    </KeyboardAvoidingView>
  );
}

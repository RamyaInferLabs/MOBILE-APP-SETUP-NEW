import { View, Text,Pressable } from 'react-native'
import { Link, router } from 'expo-router'
import React from 'react'
import {styled} from "nativewind";
import {SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView)

const SingIn = () => {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text>SingIn</Text>
      <Link  href = "/(auth)/SingUp">create an account</Link>
        <Pressable  className ="mt-4 bg-white rounded "onPress={() => router.push("/")}>
        <Text>Go Home</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default SingIn
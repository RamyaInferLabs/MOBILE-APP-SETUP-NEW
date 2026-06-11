import { Link } from "expo-router";
import { View, Text } from "react-native";

import '@/global.css'
import {styled} from "nativewind";
import {SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView)




export default function Index() {
  return (
    <SafeAreaView className = 'flex-1 bg-background p-5' >
      <Text className="text-xl font-bold text-success">
        welcome to nativewind
      </Text>
      <Link href = "/onboarding" className="mt-4 rounded bg-primary text-white p-4">go to onboarding</Link>
      <Link href = "/(auth)/SingIn" className="mt-4 rounded bg-primary text-white p-4">Log In</Link>
     <Link href = "/(auth)/SingUp"className="mt-4 rounded bg-primary text-white p-4" >Sign Up</Link>


       
    </SafeAreaView>
  );
}
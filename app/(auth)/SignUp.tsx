import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SingUp = () => {
  return (
    <View>
      <Text>SingUp</Text>
       <Link  href = "/(auth)/SingIn">log in</Link>
    </View>
  )
}

export default SingUp
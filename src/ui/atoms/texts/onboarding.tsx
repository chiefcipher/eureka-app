import {Text} from 'react-native'
import React from 'react'
export const PrimaryOnboardingText =  ({children}: {children:React.ReactNode}) => <Text
style={{
  textAlign: "center",
  fontFamily: "NotoJavanese",
  fontSize: 24,
  color: "#fff",
}}
>
{children}</Text>

export const SecondaryOnboardingText =  ({children}: {children:React.ReactNode}) => <Text
style={{
  textAlign: "center",
  fontFamily: "NotoJavanese",
  fontSize: 17,
  color: "#fff",
  marginVertical: 30,
  opacity: 0.85,
  lineHeight: 30,
}}
>
{children}</Text>
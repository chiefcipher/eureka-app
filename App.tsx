import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import {  View,  Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { DismissKeyboard } from "@src/ui/atoms/dismissKeyboard/dismissKeyboard";
import { createStackNavigator } from "@react-navigation/stack";
import { Screens } from "@src/shared/enums";
import { OnboardingOne } from "@src/ui/screens/onboardingOne/onboardingOne";
import { OnboardingTwo } from "@src/ui/screens/onboardingTwo/onboardingTwo";
import { OnboardingThree } from "@src/ui/screens/onBoardingThree/onBoardingThree";
import { SignUp } from "@src/ui/screens/signUp/signUp";
import { Login } from "@src/ui/screens/login/login";
import { ForgotPassword } from "@src/ui/screens/forgotPassword/forgotPassword";
import { OTP } from "@src/ui/screens/otp/otp";
SplashScreen.preventAutoHideAsync();

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const NavigationStack = createStackNavigator();
const Layout = () => {
  return (
    <NavigationStack.Navigator screenOptions={{ headerShown: false }}>
      <NavigationStack.Screen
        name={Screens.Onboarding1}
        component={OnboardingOne}
      />
      <NavigationStack.Screen
        name={Screens.Onboarding2}
        component={OnboardingTwo}
      />
      <NavigationStack.Screen
        name={Screens.Onboarding3}
        component={OnboardingThree}
      />
      <NavigationStack.Screen name={Screens.SignUp} component={SignUp} />
      <NavigationStack.Screen name={Screens.Login} component={Login} />
      <NavigationStack.Screen
        name={Screens.ForgotPassword}
        component={ForgotPassword}
      />
      <NavigationStack.Screen name={Screens.OTP} component={OTP} />
    </NavigationStack.Navigator>
  );
};

export default function App() {
  /* load fonts */
  const [fontsLoaded, fontError] = useFonts({
    NotoJavanese: require("./assets/fonts/NotoSansJavanese-VariableFont_wght.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      <NavigationContainer>
        <DismissKeyboard>
          <View
            onLayout={onLayoutRootView}
            style={{
              width: screenWidth,
              height: screenHeight,
              overflow: "scroll",
            }}
          >
            <Layout />
          </View>
        </DismissKeyboard>
      </NavigationContainer>
  );
}

import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradientBg } from "@src/ui/atoms/linearGradient/linearGradient";
import { CtaBtn } from "@src/ui/atoms/btn/btn";
import { Screens } from "@src/shared/enums";
import { BackArrow, Logo } from "@src/shared/assets";
import { PrimaryOnboardingText } from "@src/ui/atoms/texts/onboarding";
const BackgroundImage = require("./assets/background.png");
/*
 * third stage of onboarding
 **/

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const OnboardingThree = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
      
      }}
    >
      <ImageBackground
        source={BackgroundImage}
        style={{
          flex: 1,
          
          width: screenWidth,
          height: screenHeight,
          paddingVertical: 30,
          paddingHorizontal: 20,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={BackArrow} width={20} height={10} />
        </Pressable>

        <Image
          source={Logo}
          width={80}
          height={30}
          style={{
            alignSelf: "center",
            marginTop: "auto",
          }}
        />

        <View
          style={{
            marginTop: 20,
          }}
        >
          <PrimaryOnboardingText>
            We Will Open The World Of Knowledge For You!{" "}
          </PrimaryOnboardingText>
        </View>
        <View
          style={{
            gap: 20,
            marginTop: 30,
          }}
        >
          <CtaBtn
            variant="primary"
            text="Get started"
            handleClick={() => navigation.navigate(Screens.SignUp)}
          />
          <CtaBtn
            variant="primary"
            text="i already have an account "
            handleClick={() => navigation.navigate(Screens.Login)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

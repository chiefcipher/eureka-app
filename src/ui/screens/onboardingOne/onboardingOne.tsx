import { View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LinearGradientBg } from "@src/ui/atoms/linearGradient/linearGradient";
import { CtaBtn } from "@src/ui/atoms/btn/btn";
import { Progress } from "@src/ui/atoms/progress/progress";
import { Screens } from "@src/shared/enums";
import { Logo } from "@src/shared/assets";
import {
  PrimaryOnboardingText,
  SecondaryOnboardingText,
} from "@src/ui/atoms/texts/onboarding";
const GirlImg = require("./assets/girl-studying-university-library.png");
/*
 * first stage of onboarding
 **/
export const OnboardingOne = ({ navigation }: any) => {
  return (
    <LinearGradientBg>
      <Image
        source={Logo}
        width={80}
        height={30}
        style={{
          alignSelf: "center",
        }}
      />
      <Image
        source={GirlImg}
        style={{
          width: "100%",
          borderRadius: 30,
          marginVertical: 40,
        }}
      />
      <View>
        <PrimaryOnboardingText>
          Elevate Your Learning Experience
        </PrimaryOnboardingText>

        <SecondaryOnboardingText>
          Where innovative features meet educational excellence and with unique
          features designed for modern learners.
        </SecondaryOnboardingText>
      </View>
      <Progress stages={2} stage={1} />
      <View
        style={{
          gap: 15,
          marginTop: "auto",
        }}
      >
        <CtaBtn
          variant="primary"
          text="Continue"
          handleClick={() => navigation.navigate(Screens.Onboarding2)}
        />
        <CtaBtn
          variant="secondary"
          text="Skip"
          handleClick={() => navigation.navigate(Screens.SignUp)}
        />
      </View>
    </LinearGradientBg>
  );
};

import { View, Text, Image, Pressable, ImageBackground } from "react-native";
import { LinearGradientBg } from "@src/ui/atoms/linearGradient/linearGradient";
import { CtaBtn, SubmitBtn } from "@src/ui/atoms/btn/btn";
import { Screens } from "@src/shared/enums";
import { BackArrow, Logo } from "@src/shared/assets";
import { PrimaryOnboardingText } from "@src/ui/atoms/texts/onboarding";
import { Formik, FormikHelpers } from "formik";
import axios from "axios";
import { signUpSchema } from "@src/validations/auth";
import { AuthField } from "@src/ui/atoms/field/field";
import Spinner from "@src/ui/atoms/spinner/spinner";
/*
 * signup
 **/

const Header = ({ goBack }: { goBack: () => void }) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {/* header */}
      <Pressable onPress={goBack} style={{ marginRight: 10 }}>
        <Image source={BackArrow} width={20} height={10} />
      </Pressable>
      <Text
        style={{
          fontFamily: "NotoJavanese",
          fontWeight: "700",
          fontSize: 20,
          color: "#fff",
          flex: 1,
          textAlign: "center",
        }}
      >
        Create An{" "}
        <Text
          style={{
            color: "#007BFF",
          }}
        >
          Account.
        </Text>
      </Text>
    </View>
  );
};

interface I_FormValues {
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
const SignUpForm = ({ goToOtp }: { goToOtp: () => void }) => {
  const _handleFormSubmit = (
    values: I_FormValues,
    { setSubmitting }: FormikHelpers<I_FormValues>
  ) => {
    // simulate api
    setTimeout(() => {
      setSubmitting(false);
      goToOtp();
    }, 4000);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={signUpSchema}
      // onSubmit={handleFormSubmit}
      onSubmit={_handleFormSubmit}
    >
      {({
        handleChange,
        values,
        touched,
        errors,
        handleSubmit,
        isSubmitting,
      }) => {
        console.log(isSubmitting ? "isSUbmitting" : "not submitting");
        return (
          <View
            style={{
              paddingTop: 60,
              paddingBottom: 70,
              rowGap: 25,
            }}
          >
            <AuthField
              placeholder=""
              label="Email"
              handleChange={handleChange("email")}
              value={values.email}
              secureTextEntry={false}
              errorText={touched.email && errors.email}
            />
            <AuthField
              placeholder=""
              label="Phone Number"
              handleChange={handleChange("phone")}
              value={values.phone}
              secureTextEntry={false}
              errorText={touched.phone && errors.phone}
            />
            <AuthField
              placeholder=""
              label="Password"
              handleChange={handleChange("password")}
              value={values.password}
              secureTextEntry={true}
              errorText={touched.password && errors.password}
            />
            <AuthField
              placeholder=""
              label="Confirm Password"
              handleChange={handleChange("confirmPassword")}
              value={values.confirmPassword}
              secureTextEntry={true}
              errorText={touched.confirmPassword && errors.confirmPassword}
            />

            <SubmitBtn handleClick={handleSubmit}>
              {isSubmitting ? (
                <Spinner spinnerColor="#000" spinnerSize={24} />
              ) : (
                <Text
                  style={{
                    fontFamily: "NotoJavanese",
                    fontWeight: "700",
                    textAlign: "center",
                    padding: 10,
                    fontSize: 14,
                    color: "#000",
                  }}
                >
                  SIGN UP
                </Text>
              )}
            </SubmitBtn>
          </View>
        );
      }}
    </Formik>
  );
};
export const SignUp = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#040A2C",
        paddingVertical: 40,
        paddingHorizontal: 25,
        overflow: 'scroll',
      }}
    >
      <Header goBack={() => navigation.goBack()} />

      <Text
        style={{
          fontFamily: "NotoJavanese",
          fontWeight: "400",
          fontSize: 14,
          color: "#fff",
          opacity: 0.9,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        {/* prompt  */}
        Please enter your correct details.
      </Text>

      <SignUpForm goToOtp={() => navigation.navigate(Screens.OTP)} />
      <Text
        style={{
          fontFamily: "NotoJavanese",
          fontWeight: "400",
          fontSize: 12,
          color: "#fff",
          flex: 1,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        By signing up, you agree with our{" "}
        <Text style={{ color: "#007BFF" }}>Terms</Text> and{" "}
        <Text style={{ color: "#007BFF" }}>Privacy Policy</Text>
      </Text>
      <View
        style={{
          width: "100%",
          height: 1.5,
          marginTop: 40,
          marginBottom: 20,
          borderRadius: 3,
          backgroundColor: "#007BFF",
        }}
      >
        {/* horizontal bar */}
      </View>
      <Text
        style={{
          fontFamily: "NotoJavanese",
          fontWeight: "400",
          fontSize: 14,
          color: "#fff",
          flex: 1,
          textAlign: "center",
        }}
      >
        Already have an account?{" "}
        <Text
          style={{ color: "#007BFF" }}
          onPress={() => navigation.navigate(Screens.Login)}
        >
          LOGIN
        </Text>
      </Text>
    </View>
  );
};

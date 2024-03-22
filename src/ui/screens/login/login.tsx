import { View, Text, Image, Pressable, ImageBackground } from "react-native";
import { LinearGradientBg } from "@src/ui/atoms/linearGradient/linearGradient";
import { CtaBtn, SubmitBtn } from "@src/ui/atoms/btn/btn";
import { Screens } from "@src/shared/enums";
import { BackArrow, Logo } from "@src/shared/assets";
import { PrimaryOnboardingText } from "@src/ui/atoms/texts/onboarding";
import { Formik, FormikHelpers } from "formik";
import axios from "axios";
import { loginSchema, signUpSchema } from "@src/validations/auth";
import { AuthField } from "@src/ui/atoms/field/field";
import Spinner from "@src/ui/atoms/spinner/spinner";
/*
 * login
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
          fontWeight: "600",
          fontSize: 20,
          color: "#fff",
          flex: 1,
          textAlign: "center",
        }}
      >
        <Text
          style={{
            color: "#007BFF",
          }}
        >
          Welcome
        </Text>
        <Text> Back!</Text>
      </Text>
    </View>
  );
};

interface I_FormValues {
  email: string;
  password: string;
}
const LoginForm = ({
  goToForgotPassword,
}: {
  goToForgotPassword: () => void;
}) => {
  const _handleFormSubmit = (
    values: I_FormValues,
    { setSubmitting }: FormikHelpers<I_FormValues>
  ) => {
    // simulate api
    setTimeout(() => {
      setSubmitting(false);
    }, 4000);
  };
  return (
    <Formik
      initialValues={{
        email: "",

        password: "",
      }}
      validationSchema={loginSchema}
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
              label="Password"
              handleChange={handleChange("password")}
              value={values.password}
              secureTextEntry={true}
              errorText={touched.password && errors.password}
            />
            <Pressable onPress={goToForgotPassword}>
              <Text
                style={{
                  fontFamily: "NotoJavanese",
                  fontWeight: "700",
                  fontSize: 14,
                  color: "#007BFF",
                }}
              >
                Forgot Password?
              </Text>
            </Pressable>

            <SubmitBtn handleClick={handleSubmit}>
              {isSubmitting ? (
                <Spinner spinnerColor="#000" spinnerSize={24} />
              ) : (
                <Text
                  style={{
                    fontFamily: "NotoJavanese",
                    fontWeight: "600",
                    textAlign: "center",
                    padding: 10,
                    fontSize: 14,
                    color: "#000",
                  }}
                >
                  Login
                </Text>
              )}
            </SubmitBtn>
          </View>
        );
      }}
    </Formik>
  );
};
export const Login = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#040A2C",
        paddingVertical: 40,
        paddingHorizontal: 25,
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
        Please enter your login details.{" "}
      </Text>

      <LoginForm
        goToForgotPassword={() => navigation.navigate(Screens.ForgotPassword)}
      />

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
        Don't have an account?{" "}
        <Text
          onPress={() => navigation.navigate(Screens.SignUp)}
          style={{ color: "#007BFF" }}
        >
          SIGN UP
        </Text>
      </Text>
    </View>
  );
};

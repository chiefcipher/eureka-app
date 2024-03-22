import { View, Text, Image, Pressable } from "react-native";
import { SubmitBtn } from "@src/ui/atoms/btn/btn";
import { Screens } from "@src/shared/enums";
import { BackArrow, Logo } from "@src/shared/assets";
import { Formik, FormikHelpers } from "formik";
import axios from "axios";
import {
  forgotPasswordSchema,
  loginSchema,
  signUpSchema,
} from "@src/validations/auth";
import { AuthField } from "@src/ui/atoms/field/field";
import Spinner from "@src/ui/atoms/spinner/spinner";
/*
 * @component forgot password
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
          Forgot
        </Text>
        <Text> Password?</Text>
      </Text>
    </View>
  );
};

interface I_FormValues {
  identifier: string;
}
const ForgotPasswordForm = ({ goToOTP }: { goToOTP: () => void }) => {
  const _handleFormSubmit = (
    values: I_FormValues,
    { setSubmitting }: FormikHelpers<I_FormValues>
  ) => {
    // simulate api
    setTimeout(() => {
      setSubmitting(false);
      goToOTP();
    }, 4000);
  };
  return (
    <Formik
      initialValues={{
        identifier: "",
      }}
      validationSchema={forgotPasswordSchema}
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
              label="Email/Phone Number"
              handleChange={handleChange("identifier")}
              value={values.identifier}
              secureTextEntry={false}
              errorText={touched.identifier && errors.identifier}
            />

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
                  Continue
                </Text>
              )}
            </SubmitBtn>
          </View>
        );
      }}
    </Formik>
  );
};
export const ForgotPassword = ({ navigation }: any) => {
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
        Please enter your email or your phone number.{" "}
      </Text>

      <ForgotPasswordForm goToOTP={() => navigation.navigate(Screens.OTP)} />
    </View>
  );
};

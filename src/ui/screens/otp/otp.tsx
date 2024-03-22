import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { SubmitBtn } from "@src/ui/atoms/btn/btn";
import { Screens } from "@src/shared/enums";
import { BackArrow, Logo } from "@src/shared/assets";
import { Formik, FormikHelpers } from "formik";
import { forgotPasswordSchema } from "@src/validations/auth"; //todo change this schema
import { AuthField } from "@src/ui/atoms/field/field";
import Spinner from "@src/ui/atoms/spinner/spinner";
import { TextInput } from "react-native-gesture-handler";
import { useRef, useState, useEffect } from "react";
/*
 * @component otp
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
          You’ve Got A
        </Text>
        <Text> Mail </Text>
        <Text
          style={{
            color: "#007BFF",
          }}
        >
          !{" "}
        </Text>
      </Text>
    </View>
  );
};

interface I_FormValues {
  identifier: string;
}
const OTPForm = () => {
  const textInputRef1= useRef(null);
  const textInputRef2 = useRef(null);
  const textInputRef3 = useRef(null);
  const textInputRef4 = useRef(null);

  const [textInput, setTextInput] = useState("");
  const _handleFormSubmit = (
    values: I_FormValues,
    { setSubmitting }: FormikHelpers<I_FormValues>
  ) => {
    // simulate api
    setTimeout(() => {
      setSubmitting(false);
    }, 4000);
  };

  useEffect(() => {
    const refs =[textInputRef1, textInputRef2, textInputRef3, textInputRef4]; 
    if (
      refs[textInput.length]
    ){
      (refs[textInput.length].current as any).focus()
    }
  
   
  }, [textInput])
  
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
              gap: 25,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput style={styles.textInput} ref={textInputRef1} onChangeText={(text:string) => setTextInput(x=> x+text) }/>
              <TextInput style={styles.textInput} ref={textInputRef2} onChangeText={(text:string) => setTextInput(x=> x+text) }/>
              <TextInput style={styles.textInput} ref={textInputRef3} onChangeText={(text:string) => setTextInput(x=> x+text) }/>
              <TextInput style={styles.textInput} ref={textInputRef4} onChangeText={(text:string) => setTextInput(x=> x+text) }/>
            </View>
            <Text
              style={{
                fontFamily: "NotoJavanese",
                fontWeight: "600",
                fontSize: 16,
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
                Didn’t receive the OTP?{" "}
              </Text>
              <Text> Resend It </Text>
            </Text>
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
                  Confirm
                </Text>
              )}
            </SubmitBtn>
          </View>
        );
      }}
    </Formik>
  );
};
export const OTP = ({ navigation }: any) => {
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
        Please check your mail and input the code below.{" "}
      </Text>

      <OTPForm />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 42,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    borderColor: "#FFF",
    color: "#fff",
    fontFamily: "NotoJavanese",
    paddingHorizontal: 7,
    backgroundColor: "#040A2C",
    textAlign : 'center',
    textAlignVertical: "center",
    lineHeight: 42,
    width: 42,
  },
});

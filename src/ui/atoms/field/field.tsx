import React from "react";
import { Text, TextInput, View } from "react-native";
export const AuthField = ({
  placeholder,
  handleChange,
  value,
  secureTextEntry,
  errorText,
  label,
}: {
  placeholder: string;
  handleChange: (e: string | React.ChangeEvent<any>) => void;
  value: string;
  secureTextEntry?: boolean;
  errorText?: false | string;
  label: string;
}) => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 3,
          fontFamily: "NotoJavanese",
          fontWeight: "700",
          fontSize: 12,
          color: "#fff",
        }}
      >
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={handleChange}
        value={value}
        secureTextEntry={secureTextEntry}
        style={{
          height: 42,
          borderColor: errorText ? "red" : "#fff",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 5,
          color: "#fff",
          fontFamily: "NotoJavanese",
          paddingHorizontal: 7,
          backgroundColor: "#040A2C",
          textAlignVertical : 'center',
          lineHeight : 42,
        }}
      />
      {
        <Text
          style={{
            fontFamily: "NotoJavanese",
            fontSize: 12,
            color: "red",
            marginTop: 5,
            height : 14
          }}
        >
          {errorText ? errorText : ""}
        </Text>
      }
    </View>
  );
};

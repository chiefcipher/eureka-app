import { Pressable, Text, TouchableOpacity, View } from "react-native";

export const CtaBtn = ({
  text,
  handleClick,
  variant,
}: {
  text: string;
  variant: "primary" | "secondary"; //primary for white cta and secondary for transparent ctas
  handleClick: () => void;
}) => {
  return (
    <Pressable
      onPress={handleClick}
      style={{
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: variant === "primary" ? "#fff" : "transparent",
        borderColor: "#fff",
        borderWidth: 1.5,
        borderStyle: "solid",
      }}
    >
      <Text
        style={{
          fontFamily: "NotoJavanese",
          fontSize: 17,
          color: variant === "primary" ? "#000" : "#fff",
          width: "100%",
          textAlign: "center",
          height: 30,
          textAlignVertical: "center",
          textTransform: "uppercase",
          fontWeight: "600",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export const SubmitBtn = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <Pressable
      onPress={handleClick}
      style={{
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1.5,
        borderStyle: "solid",
      }}
    >
      {children}
    </Pressable>
  );
};

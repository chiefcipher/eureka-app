import { View } from "react-native";
/*
 * shows progress at onboarding stage
 */
export const Progress = ({
  stage,
  stages,
}: {
  stage: number;
  stages: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        marginBottom : 40
      }}
    >
      {Array.from({ length: stages })
        .fill("a")
        .map((el, i) => (
          <View
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: 50,
              backgroundColor: stage === i + 1 ? "#2ECC71" : "#fff",
            }}
          ></View>
        ))}
    </View>
  );
};

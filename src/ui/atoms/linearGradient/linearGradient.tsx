import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
export const LinearGradientBg = ({ children }: { children: ReactNode }) => (
  <LinearGradient
    start={{ x: 0.0, y: 0 }}
    end={{ x: 0, y: 1 }}
    locations={[0, 0.7]}
    colors={["#040A2C", "#052183"]}
    style={{
      flex: 1,
      width: "100%",
      paddingVertical : 30,
      paddingHorizontal : 20,
      // paddingTop : 30, 
      // paddingBottom : 
    }}
  >
    {children}
  </LinearGradient>
);

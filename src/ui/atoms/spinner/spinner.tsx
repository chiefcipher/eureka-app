import React, { useRef, useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = ({
  spinnerColor,
  spinnerSize,
}: {
  spinnerColor: string;
  spinnerSize: number;
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startAnimation());
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <FontAwesomeIcon
          icon={faSpinner}
          size={spinnerSize}
          color={spinnerColor}
        />
      </Animated.View>
    </View>
  );
};

export default Spinner;

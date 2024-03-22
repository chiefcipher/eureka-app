/*
 * component dismisses keyboard when an area outside textfield input is clicked
 */
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export const DismissKeyboard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}</TouchableWithoutFeedback>
  );
};

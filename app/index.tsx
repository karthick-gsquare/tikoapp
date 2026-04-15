import { Button, Text, View, Linking, Alert } from "react-native";

export default function Index() {
  const makeCall = () => {
    const phoneNumber = "tel:+918056179854"; // sample number
    const phoneNumber2 = "tel:+918056179854"; // sample number

    Linking.canOpenURL(phoneNumber)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneNumber);
        } else {
          Alert.alert("Error", "Phone call not supported on this device");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Call Now" onPress={makeCall} />
      <Text>Hello Peter!</Text>
    </View>
  );
}

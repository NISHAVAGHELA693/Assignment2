import React, { useState } from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";
import Scale from "./Scale";

const TextInputFields = (props) => {
  const {
    placeholder,
    autoCapitalize,
    iconSource,
    value,
    onChangeText,
    error,
    secureTxt
  } = props;

  const [isError, setIsError] = useState(false);

  const handleInputChange = (text) => {
    onChangeText(text);
    setIsError(false);
  };

  return (
    <View style={[styles.inputTxtView, isError && { borderColor: 'red', borderWidth: 1 }]}>
      <Image source={iconSource} style={styles.IconStyle} />
      <TextInput
        placeholder={placeholder}
        autoCapitalize={autoCapitalize || 'none'}
        style={styles.inputTxt}
        value={value}
        onChangeText={handleInputChange}
        secureTextEntry={secureTxt}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputTxt: {
    width: Scale(270),
    height: Scale(46),
    padding: Scale(10),
    borderRadius: Scale(5)
},
inputTxtView: {
    marginTop: Scale(30),
    width: Scale(308),
    height: Scale(46),
    backgroundColor: "#ffff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
},
IconStyle: {
    width: Scale(16),
    height: Scale(16),
},
});

export default TextInputFields;

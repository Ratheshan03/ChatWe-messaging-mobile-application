import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Button, Input, Image } from "@rneui/base";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

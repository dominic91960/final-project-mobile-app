import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-around items-center min-h-[90vh] px-4">
          <Image
            source={images.logo}
            className="w-[260px] h-[168px]"
            resizeMode="contain"
          />
          <Image
            source={images.printer}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Elevate Your Experience with{" "}
              <Text className="text-secondary-100">Nova</Text>
            </Text>
            <Text className="text-sm font-pregular text-gray-100 mt-5 text-center">
              Nova is your all-in-one solution for managing and monitoring 3D
              printers with ease and efficiency.
            </Text>
          </View>
          <CustomButton
            title="Continue with email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#191919" style="light" />
    </SafeAreaView>
  );
}

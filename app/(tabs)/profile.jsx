import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { icons } from "../../constants";
import InfoBox from "../../components/InfoBox";
import { router } from "expo-router";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-center items-center mt-6 mb-12 px-4">
        <TouchableOpacity className="w-full items-end mb-10" onPress={logout}>
          <Image
            source={icons.logout}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
          <Image
            source={{ uri: user?.avatar }}
            className="w-[90%] h-[90%] rounded-lg"
            resizeMode="cover"
          />
        </View>
        <InfoBox
          title={user?.username}
          containerStyles="mt-5"
          titleStyles="text-lg"
        />
        <View className="mt-5 flex-row">
          <InfoBox
            title={0}
            subtitle="Subtitle"
            containerStyles="mr-10"
            titleStyles="text-xl"
          />
          <InfoBox title="0" subtitle="Subtitle" titleStyles="text-xl" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

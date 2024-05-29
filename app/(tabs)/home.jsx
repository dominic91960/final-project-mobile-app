import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider";

const Home = () => {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="my-6 px-4 space-y-6">
        <View className="justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-pmedium text-sm text-gray-100">
              Welcome Back
            </Text>
            <Text className="text-2xl font-psemibold text-white">
              {user?.username}
            </Text>
          </View>
          <View className="mt-1.5">
            <Image
              source={images.logoSmall}
              className="w-9 h-10 mt-1"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

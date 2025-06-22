import { Image, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "@/constants";
import Button from "@/components/Button";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center flex h-full px-4">
          <View className="flex items-center flex-row justify-center">
            <Image
              source={
                images.logoSmall || require("@/assets/images/logo-small.png")
              }
              className="w-[90px] h-[64px]"
              resizeMode="contain"
            />
            <Text className="text-secondary-200 font-psemibold text-4xl mt-4">
              ViV
            </Text>
          </View>
          <Image
            source={images.cards || require("@/assets/images/cards.png")}
            className="max-w-[380px] w-full mt-3 h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">ViV</Text>
            </Text>
            <Image
              source={images.path || require("@/assets/images/path.png")}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: Embark on a journey of
            relentlessly limitless experience with ViV
          </Text>
          <Button
            title="Continue With Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
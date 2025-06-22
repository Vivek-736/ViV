import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    
  }

  return (
    <SafeAreaView className="bg-black-100 h-full">
      <ScrollView>
        <View className="w-full justify-center flex min-h-[85vh] px-4 my-6">
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
          <Text className="text-2xl text-white mt-10 font-semibold text-center">
            Sign up to ViV
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: any) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <Button
            title="Sign Up"
            handlePress={onSubmit}
            containerStyles="mt-10"
            isLoading={isLoading}
          />
          <View className="flex-row gap-2 mt-4 justify-center">
            <Text className="text-lg text-gray-100 font-pregular">
                Already have an account?{" "}
            </Text>
            <Link href={'/sign-in'} className="text-lg font-psemibold text-secondary">
              Sign In
          </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

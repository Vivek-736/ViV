import { Alert, Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import { Link, router } from "expo-router";
import { signIn } from "@/lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setIsLoading(true);

    try {
      await signIn(form.email, form.password);

      // set it to global state using context
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

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
            Log in to ViV
          </Text>
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
            title="Sign In"
            handlePress={onSubmit}
            containerStyles="mt-10"
            isLoading={isLoading}
          />
          <View className="flex-row gap-2 mt-4 justify-center">
            <Text className="text-lg text-gray-100 font-pregular">
              New to ViV?{" "}
            </Text>
            <Link
              href={"/sign-up"}
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

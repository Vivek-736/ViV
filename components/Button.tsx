import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string;
    handlePress: () => void;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
}

const Button = ({ title, handlePress, containerStyles, textStyles, isLoading }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary min-h-[62px] rounded-xl flex justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Text className={`text-primary text-lg font-psemibold ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

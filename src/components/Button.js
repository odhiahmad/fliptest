import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import COLORS from '../varibelTemp/colors';


const PrimaryButton = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={style.btnContainer}>
                <Text style={style.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};
const SecondaryButton = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{ ...style.btnContainer, backgroundColor: COLORS.white }}>
                <Text style={{ ...style.title, color: COLORS.primary }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const ThirdButton = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{ ...style.btnContainer, backgroundColor: COLORS.grey }}>
                <Text style={{ ...style.title, color: COLORS.white }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    title: { color: COLORS.white, fontWeight: 'bold', fontSize: 18 },
    btnContainer: {
        marginTop: 10,
        padding: 20,
        backgroundColor: COLORS.primary,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export { PrimaryButton, SecondaryButton, ThirdButton };

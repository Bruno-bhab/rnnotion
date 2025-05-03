import { View, Image, Text, TouchableOpacity } from "react-native";
import { s } from "./style";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export function Header() {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{ uri: "https://github.com/bruno-bhab.png" }}
      />

      <View style={s.user}>
        <Text style={s.name}>Bruno Barbosa</Text>
        <Text style={s.email}>bruno.bhab@gmail.com</Text>
      </View>

      <TouchableOpacity>
        <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
      </TouchableOpacity>
    </View>
  );
}

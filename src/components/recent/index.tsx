import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./style";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = {
  data: {
    id: string;
    title: string;
    cover?: string;
  };
};

export function Recent({ data }: Props) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.7}>
      <Image style={s.cover} source={{ uri: data.cover }} />

      <View style={s.content}>
        <Feather style={s.icon} name="file-text" size={32} color={colors.gray[300]} />

        <Text style={s.title} numberOfLines={2}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

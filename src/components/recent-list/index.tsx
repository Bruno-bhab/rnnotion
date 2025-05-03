import { FlatList, Text, View } from "react-native";
import { s } from "./style";
import { Recent } from "@/components/recent";

type Props = {
  data: {
    id: string;
    title: string;
    cover?: string;
  }[];
};

export function RecentList({ data }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Recentes</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Recent data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.content}
      />
    </View>
  );
}

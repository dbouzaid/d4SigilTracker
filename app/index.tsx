import { FlatList, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { data } from "../constants/nightmare-dungeons";

interface ItemProps {
  name: string;
  location: string;
}

const Item = ({name, location}: ItemProps) => (
  <View className="p-4 bg-white rounded-lg m-4">
    <Text className="text-red-950 font-semibold text-lg">{name} + {location}</Text>
  </View>
);

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1"
        edges={["left", "right"]}
      >
        <ImageBackground
          source={require("@/assets/images/D4_Wallpaper.png")}
          resizeMode="cover"
          className="flex-1 justify-center"
        >
            <FlatList
              data={data}
              renderItem={({ item }) => <Item name={item.name} location={item.location} />}
            >

            </FlatList>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

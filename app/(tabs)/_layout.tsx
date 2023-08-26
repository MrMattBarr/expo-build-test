import FontAwesome from "@expo/vector-icons/FontAwesome";
import Background from "../../components/Background";
import Header from "../../components/Header";

import Page from "../../components/Page";
import { useColorScheme } from "react-native";
import LoginBox from "../../components/LoginBox";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Background>
      <Page>
        <Header />
        <LoginBox />
      </Page>
    </Background>
  );
}

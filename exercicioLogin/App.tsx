import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/screens/Home";
import { ScrollView } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaProvider>
  );
}

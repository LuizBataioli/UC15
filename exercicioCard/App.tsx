import Home from "./src/screens/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#8C8C8C" }}>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

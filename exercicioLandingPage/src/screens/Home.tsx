import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import Headerr from "../components/Headerr";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <SafeAreaView>
      <Headerr />
      <Card />
      <Footer />
    </SafeAreaView>
  );
};

export default Home;

import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Main from "../components/Main";
//import Footer from "../components/Footer";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <Main />
      {/*<Footer />*/}
    </SafeAreaView>
  );
};

export default Home;

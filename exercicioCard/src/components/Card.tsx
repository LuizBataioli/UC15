import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Card = () => {
  return (
    <ScrollView>
      {/*CARD 1*/}
      <View style={{ marginTop: 20 }}>
        <Header
          imagePerfil={"https://github.com/LuizBataioli.png"}
          nome={"@ Luiz_Bataioli"}
        />
        <Content imageContent={"https://github.com/LuizBataioli.png"} />
        <Footer description="Programador senior" />
      </View>
      {/*CARD 2*/}
      <View style={{ marginTop: 60 }}>
        <Header
          imagePerfil={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkJyiWXL8IrU29KykBdB8ek7L9GTKG37RxQ&s"
          }
          nome={"@ Tata"}
        />
        <Content
          imageContent={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkJyiWXL8IrU29KykBdB8ek7L9GTKG37RxQ&s"
          }
        />
        <Footer description="O tata é foda" />
      </View>
      {/*CARD 3*/}
      <View style={{ marginTop: 60 }}>
        <Header
          imagePerfil={
            "https://yt3.ggpht.com/a/AGF-l7_c2T1i-rivt7hovtr3ZXas39nWICBEWpCniw=s900-c-k-c0xffffffff-no-rj-mo"
          }
          nome={"@ Aristeu"}
        />
        <Content
          imageContent={
            "https://yt3.ggpht.com/a/AGF-l7_c2T1i-rivt7hovtr3ZXas39nWICBEWpCniw=s900-c-k-c0xffffffff-no-rj-mo"
          }
        />
        <Footer description="Manual do aristeu" />
      </View>
      {/*CARD 4*/}
      <View style={{ marginTop: 60 }}>
        <Header
          imagePerfil={
            "https://radioaconquista.com.br/site/wp-content/uploads/2023/05/Manoel-Gomes.png"
          }
          nome={"@ Manoel Gomes"}
        />
        <Content
          imageContent={
            "https://radioaconquista.com.br/site/wp-content/uploads/2023/05/Manoel-Gomes.png"
          }
        />
        <Footer description="Caneta azul" />
      </View>
    </ScrollView>
  );
};

export default Card;

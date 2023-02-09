import Head from "next/head";
import Banner from "../components/Banner";
import Budget from "../components/Budget";
import Card from "../components/Card";
import Maps from "../components/Maps";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maq Pedro</title>
      </Head>
      <Banner />
      <Budget />
      <div className="text-center mt-5">
        <p className="text-[36px] text-gray-800">Serviços</p>
      </div>
      <div className="flex flex-row gap-3 px-40 max-md:flex-col max-md:px-3">
        <Card alt="image 1" image="img/card1.jpg" title="Venda" description=" Temos máquinas a pronta entrega com motor por um preço camarada." />
        <Card alt="image 2" image="img/card2.png" title="Peças" description=" Fazemos a troca da sua peça danificada por uma novinha" />
        <Card alt="image 3" image="img/card3.jpg" title="Pintura" description="Precisa retocar o visual da sua máquina? deixa conosco!" />
        <Card alt="image 4" image="img/card4.jpg" title="Manutenção" description="Manutenção geral para sua máquina ficar novinha em folha. " />
      </div>
      <Maps />
      <Footer />
    </>
  );
}
